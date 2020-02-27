import {Injectable} from '@angular/core';
import {Selections} from './model/selections';
import {SelectionLoggerService} from './selection-logger.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private selections: Selections = {
    curability: -1,
    preventability: -1,
    adultOnset: -1,
    carrierStatus: -1,
  };

  constructor(private sls: SelectionLoggerService) {
  }

  setCurability(val: number, context?: any) {
    if (this.selections.curability !== val) {
      this.selections.curability = val;
      this.logSelections(context);
    }
  }

  getCurability(): number {
    return this.selections.curability;
  }

  setPreventability(val: number, context?: any) {
    if (this.selections.preventability !== val) {
      this.selections.preventability = val;
      this.logSelections(context);
    }
  }

  getPreventability(): number {
    return this.selections.preventability;
  }

  setAdultOnset(val: number, context?: any) {
    if (this.selections.adultOnset !== val) {
      this.selections.adultOnset = val;
      this.logSelections(context);
    }
  }

  getAdultOnset(): number {
    return this.selections.adultOnset;
  }
  setCarrierStatus(val: number, context?: any) {
    if (this.selections.carrierStatus !== val) {
      this.selections.carrierStatus = val;
      this.logSelections(context);
    }
  }

  getCarrierStatus(): number {
    return this.selections.carrierStatus;
  }

  // get curability() {
  //   if (this.selections.curability < 0) {
  //     return null;
  //   }
  //
  //   return (this.selections.curability === 1);
  // }
  //
  // set curability(val: boolean) {
  //   this.selections.curability = (val ? 1 : 0);
  //   this.logSelections();
  // }

  // get preventability() {
  //   if (this.selections.preventability < 0) {
  //     return null;
  //   }
  //
  //   return (this.selections.preventability === 1);
  // }
  //
  // set preventability(val: boolean) {
  //   this.selections.preventability = (val ? 1 : 0);
  //   this.logSelections();
  // }
  //
  // get adultOnset() {
  //   if (this.selections.adultOnset < 0) {
  //     return null;
  //   }
  //
  //   return (this.selections.adultOnset === 1);
  // }
  //
  // set adultOnset(val: boolean) {
  //   this.selections.adultOnset = (val ? 1 : 0);
  //   this.logSelections();
  // }
  //
  // get carrierStatus() {
  //   if (this.selections.carrierStatus < 0) {
  //     return null;
  //   }
  //
  //   return (this.selections.carrierStatus === 1);
  // }
  //
  // set carrierStatus(val: boolean) {
  //   this.selections.carrierStatus = (val ? 1 : 0);
  //   this.logSelections();
  // }

  private logSelections(context?: any) {
    this.sls.log({selections: this.selections, context});
  }
}
