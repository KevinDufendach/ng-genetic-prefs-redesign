import { Component, OnInit } from '@angular/core';
import {CONDITION_DATA} from '../model/condition';
import {SurveyService} from '../survey.service';

@Component({
  selector: 'app-curability',
  templateUrl: './curability.component.html',
  styleUrls: ['./curability.component.scss']
})
export class CurabilityComponent {
  notSureAllowed = false;

  constructor(public survey: SurveyService) { }

  get value(): number {
    return this.survey.getCurability();
  }

  set value(val: number) {
    this.survey.setCurability(val, {context: 'Curability Step'});
  }
}
