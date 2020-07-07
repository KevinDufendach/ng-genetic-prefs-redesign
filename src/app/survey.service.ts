import {Injectable} from '@angular/core';
import {Selections} from './model/selections';
import {SelectionLoggerService} from './selection-logger.service';
import { Observable } from 'rxjs';

export enum Parameter {
  Preventability,
  Treatability,
  AdultOnset,
  Carrier
}

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private _selections = new Selections();

  // readonly selectionStream: Observable<Selections>;

  private overrideIncludes: Set<string> = new Set();
  private overrideExcludes: Set<string> = new Set();

  constructor(private sls: SelectionLoggerService) {
  }

  setTreatability(val: number, context?: any) {
    if (this._selections.treatability !== val) {
      this._selections.treatability = val;
      this.logSelections(context);
    }
  }

  getTreatability(): number {
    return this._selections.treatability;
  }

  get treatability(): boolean {
    return this._selections.treatability === 1;
  }

  setPreventability(val: number, context?: any) {
    if (this._selections.preventability !== val) {
      this._selections.preventability = val;
      this.logSelections(context);
    }
  }

  getPreventability(): number {
    return this._selections.preventability;
  }

  get preventability(): boolean {
    return this._selections.preventability === 1;
  }

  setAdultOnset(val: number, context?: any) {
    if (this._selections.adultOnset !== val) {
      this._selections.adultOnset = val;
      this.logSelections(context);
    }
  }

  getAdultOnset(): number {
    return this._selections.adultOnset;
  }

  get adultOnset(): boolean {
    return this._selections.adultOnset === 1;
  }

  setCarrierStatus(val: number, context?: any) {
    if (this._selections.carrierStatus !== val) {
      this._selections.carrierStatus = val;
      this.logSelections(context);
    }
  }

  getCarrierStatus(): number {
    return this._selections.carrierStatus;
  }

  get carrierStatus(): boolean {
    return this._selections.carrierStatus === 1;
  }

  public logSelections(context?: any) {
    return this.sls.log({selections: this._selections, context});
  }

  getParameter(p: Parameter): boolean {
    switch (p) {
      case Parameter.Preventability:
        return this.preventability;
      case Parameter.Treatability:
        return this.treatability;
      case Parameter.AdultOnset:
        return this.adultOnset;
      case Parameter.Carrier:
        return this.carrierStatus;
    }
  }
}
