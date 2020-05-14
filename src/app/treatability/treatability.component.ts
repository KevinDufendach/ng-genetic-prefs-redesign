import { Component } from '@angular/core';
import {SurveyService} from '../survey.service';
import {SURVEY_STEP} from '../condition-manager.service';

@Component({
  selector: 'app-treatability',
  templateUrl: './treatability.component.html',
  styleUrls: ['./treatability.component.scss']
})
export class TreatabilityComponent {
  notSureAllowed = false;
  surveySteps = SURVEY_STEP;

  constructor(public survey: SurveyService) { }

  get value(): number {
    return this.survey.getTreatability();
  }

  set value(val: number) {
    this.survey.setTreatability(val, {context: 'Treatability Step'});
  }
}
