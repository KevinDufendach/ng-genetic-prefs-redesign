import { Injectable } from '@angular/core';
import {Selections} from './model/selections';
import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface SelectionChangeEvent {
  uid: string;
  timestamp?: Timestamp;
  selections: Selections;
  context?: any;
}

@Injectable({
  providedIn: 'root'
})
export class SelectionLoggerService {
  constructor() { }

  log(e: SelectionChangeEvent) {
    if (!e.timestamp) {
      e.timestamp = Timestamp.now();
    }

    console.log(e);
  }
}
