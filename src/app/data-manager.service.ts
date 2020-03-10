import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import {SelectionChangeEvent} from './selection-logger.service';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {User} from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  readonly user: Observable<User | null>;

  constructor(private afs: AngularFirestore, private auth: AuthService) {
    this.user = this.auth.user;
  }

  logSelectionChange(logEntry: SelectionChangeEvent) {
    this.user.subscribe(u => {
      if (u) {
        if (logEntry.uid == null) {
          logEntry.uid = u.uid;
        }

        if (!logEntry.timestamp == null) {
          logEntry.timestamp = Timestamp.now();
        }

        const docId = (logEntry.timestamp).toMillis().toString();

        this.getUserDataDocument(u).collection('logs').doc<SelectionChangeEvent>(docId).set(logEntry)
          .then(value => {
            console.log('successfully saved log data for:' + u.uid + ' at ' + docId);
          }).catch(reason => {
          console.log('NOT successful saving log data for:' + u.uid + ' at ' + docId);
          console.log(reason);
        });
      } else {
        console.log('error getting user');
      }
    });
  }

  // private async bootstrapData(logEntry: SelectionChangeEvent): SelectionChangeEvent {
  //   const u = this.user.toPromise();
  //
  //
  // }

  setRole(role: string) {
    this.user.subscribe(u => {
      if (u) {
        this.getUserDataDocument(u).set({role})
          .then(_ => {
            console.log('successfully saved user as ' + role);
          }).catch(reason => {
            console.log('NOT successful saving role data for:' + u.uid + ' at ' + role);
            console.log(reason);
          }
        );
      } else {
        console.log('error getting user');
      }
    });
  }

  getResultsDuringTimeRange(start: Timestamp, end: Timestamp): Observable<SelectionChangeEvent[]> {
    // const userData: AngularFirestoreCollection = this.afs.collection('userData');

    // return this.afs.collection('userData')
    //   .doc('1DO5BUDAD0P1nLqdba5ETBGG2Oq2')
    //   .collection<SelectionChangeEvent>('logs')
    //   .valueChanges();

    return this.afs.collectionGroup<SelectionChangeEvent>('logs', ref => ref
          .where('timestamp', '>=', start)
          .where('timestamp', '<=', end))
      .valueChanges();
  }

  private getUserDataDocument(u: User): AngularFirestoreDocument {
    return this.afs.collection('userData').doc(u.uid);
  }
}
