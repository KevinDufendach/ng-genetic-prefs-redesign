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

  public logSelections(context?: any) {
    return this.sls.log({selections: this.selections, context});
  }
}
