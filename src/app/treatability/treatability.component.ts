import { Component } from '@angular/core';
import {SurveyService} from '../survey.service';

@Component({
  selector: 'app-treatability',
  templateUrl: './treatability.component.html',
  styleUrls: ['./treatability.component.scss', '../../survey.scss']
})
export class TreatabilityComponent {
  notSureAllowed = false;

  constructor(public survey: SurveyService) { }

  get value(): number {
    return this.survey.getTreatability();
  }

  set value(val: number) {
    this.survey.setTreatability(val, {context: 'Treatability Step'});
  }
}
