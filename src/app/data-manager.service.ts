import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Selections} from './model/selections';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private responsesCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
    // this.responsesCollection = afs.collection<Selections>('survey',  );
  }

  // save(selections: Selections)
}
