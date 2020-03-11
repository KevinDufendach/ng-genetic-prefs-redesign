import {Component} from '@angular/core';
import {SurveyService} from '../survey.service';
import {SURVEY_STEP} from '../condition-manager.service';

@Component({
  selector: 'app-preventability',
  templateUrl: './preventability.component.html',
  styleUrls: ['./preventability.component.scss']
})
export class PreventabilityComponent {
  surveySteps = SURVEY_STEP;
  notSureAllowed = false;

  constructor(public survey: SurveyService) { }

  get value(): number {
    return this.survey.getPreventability();
  }

  set value(val: number) {
    this.survey.setPreventability(val, {context: 'Preventability Step'});
  }
}
