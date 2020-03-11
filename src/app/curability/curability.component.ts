import { Component, OnInit } from '@angular/core';
import {SurveyService} from '../survey.service';
import {SURVEY_STEP} from '../condition-manager.service';

@Component({
  selector: 'app-curability',
  templateUrl: './curability.component.html',
  styleUrls: ['./curability.component.scss']
})
export class CurabilityComponent {
  notSureAllowed = false;
  surveySteps = SURVEY_STEP;

  constructor(public survey: SurveyService) { }

  get value(): number {
    return this.survey.getCurability();
  }

  set value(val: number) {
    this.survey.setCurability(val, {context: 'Curability Step'});
  }
}
