import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
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

  logSelectionChange(logEntry: SelectionChangeEvent) {
    this.user.subscribe(u => {
      if (u) {
        const docId = (logEntry.timestamp || Timestamp.now()).toMillis().toString();

        console.log('Logging selection change for:' + u.uid + ' at ' + docId);
        this.getUserDataDocument(u).collection('logs').doc<SelectionChangeEvent>(docId).set(logEntry)
          .then(value => {
            console.log('successfully saved log data');
          }).catch(reason => {
            console.log('NOT successful saving log data:');
            console.log(reason);
        });
      }
    });
  }
}
