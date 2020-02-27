import {Component} from '@angular/core';
import {SurveyService} from '../survey.service';

@Component({
  selector: 'app-preventability',
  templateUrl: './preventability.component.html',
  styleUrls: ['./preventability.component.scss']
})
export class PreventabilityComponent {
  notSureAllowed = false;

  constructor(public survey: SurveyService) { }

  get value(): number {
    return this.survey.getPreventability();
  }

  set value(val: number) {
    this.survey.setPreventability(val, {context: 'Preventability Step'});
  }
}
