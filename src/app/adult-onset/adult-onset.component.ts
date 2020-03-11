import { Component} from '@angular/core';
import {SurveyService} from '../survey.service';
import {SURVEY_STEP} from '../condition-manager.service';

@Component({
  selector: 'app-adult-onset',
  templateUrl: './adult-onset.component.html',
  styleUrls: ['./adult-onset.component.scss']
})
export class AdultOnsetComponent {
  surveySteps = SURVEY_STEP;
  notSureAllowed = false;

  constructor(public survey: SurveyService) { }

  get value(): number {
    return this.survey.getAdultOnset();
  }

  set value(val: number) {
    this.survey.setAdultOnset(val, {context: 'Curability Step'});
  }
}
