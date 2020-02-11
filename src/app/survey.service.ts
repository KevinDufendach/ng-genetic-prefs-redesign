import { Injectable } from '@angular/core';
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

  constructor() { }
}
