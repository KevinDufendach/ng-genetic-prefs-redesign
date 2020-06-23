import {Injectable} from '@angular/core';
import {Selections} from './model/selections';
import {SelectionLoggerService} from './selection-logger.service';

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
  private selections: Selections = {
    treatability: -1,
    preventability: -1,
    adultOnset: -1,
    carrierStatus: -1,
  };

  private overrideIncludes: Set<string> = new Set();
  private overrideExcludes: Set<string> = new Set();

  constructor(private sls: SelectionLoggerService) {
  }

  // getOverride(id: string): Overrides {
  //   if (this.overrideIncludes.has(id)) { return Overrides.Include; }
  //   if (this.overrideExcludes.has(id)) { return Overrides.Exclude; }
  //   return Overrides.Default;
  // }

  // setOverride(id: string, value: Overrides) {
  //   if (value === Overrides.Include) {
  //     this.overrideIncludes.add(id);
  //     this.overrideExcludes.delete(id);
  //     return;
  //   }

  //   this.overrideIncludes.delete(id);
  //   if (value === Overrides.Exclude) {
  //     this.overrideExcludes.add(id);
  //     return;
  //   }

  //   this.overrideExcludes.delete(id);
  // }

  setTreatability(val: number, context?: any) {
    if (this.selections.treatability !== val) {
      this.selections.treatability = val;
      this.logSelections(context);
    }
  }

  getTreatability(): number {
    return this.selections.treatability;
  }

  get treatability(): boolean {
    return this.selections.treatability === 1;
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

  get preventability(): boolean {
    return this.selections.preventability === 1;
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

  get adultOnset(): boolean {
    return this.selections.adultOnset === 1;
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

  get carrierStatus(): boolean {
    return this.selections.carrierStatus === 1;
  }

  public logSelections(context?: any) {
    return this.sls.log({selections: this.selections, context});
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
