import {Injectable} from '@angular/core';
import {Selections} from './model/selections';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  public selections: Selections = {
    curability: -1,
    preventability: -1,
    adultOnset: -1,
    carrierStatus: -1,
  };

  constructor() {
  }

  get curability() {
    if (this.selections.curability < 0) {
      return null;
    }

    return (this.selections.curability === 1);
  }

  set curability(val: boolean) {
    this.selections.curability = (val ? 1 : 0);
  }

  get preventability() {
    if (this.selections.preventability < 0) {
      return null;
    }

    return (this.selections.preventability === 1);
  }

  set preventability(val: boolean) {
    this.selections.preventability = (val ? 1 : 0);
  }

  get adultOnset() {
    if (this.selections.adultOnset < 0) {
      return null;
    }

    return (this.selections.adultOnset === 1);
  }

  set adultOnset(val: boolean) {
    this.selections.adultOnset = (val ? 1 : 0);
  }

  get carrierStatus() {
    if (this.selections.carrierStatus < 0) {
      return null;
    }

    return (this.selections.carrierStatus === 1);
  }

  set carrierStatus(val: boolean) {
    this.selections.carrierStatus = (val ? 1 : 0);
  }
}
