import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import {SelectionChangeEvent} from './selection-logger.service';
import {Observable} from 'rxjs';
import {User} from 'firebase';

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
        console.log(u.uid);

        this.getUserDataDocument(u).collection('logs').doc<SelectionChangeEvent>().set(logEntry)
          .then(value => {
            console.log('successfully saved log data');
          }).catch(reason => {
            console.log('NOT successful saving log data:');
            console.log(reason);
        });
      }
    });
  }

  logSaveEvent(logEntry: SelectionChangeEvent) {
    this.user.subscribe(u => {
      if (u) {
        console.log(u.uid);

        this.getUserDataDocument(u).collection('saves').doc<SelectionChangeEvent>().set(logEntry)
          .then(value => {
            console.log('successfully saved selection data');
          }).catch(reason => {
          console.log('NOT successful saving selection data:');
          console.log(reason);
        });
      }
    });
  }
}
