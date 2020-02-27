import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import {SelectionChangeEvent} from './selection-logger.service';
import {Observable} from 'rxjs';
import {User} from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  readonly user: Observable<User | null>;

  constructor(private afs: AngularFirestore, private auth: AuthService) {
    this.user = this.auth.user;
  }

  private getUserDataDocument(u: User): AngularFirestoreDocument {
    return this.afs.collection('userData').doc(u.uid);
  }

  // private async bootstrapData(logEntry: SelectionChangeEvent): SelectionChangeEvent {
  //   const u = this.user.toPromise();
  //
  //
  // }

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
      }
    });
  }
}
