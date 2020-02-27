import { Component } from '@angular/core';
import {SurveyService} from '../survey.service';

@Component({
  selector: 'app-carrier-status',
  templateUrl: './carrier-status.component.html',
  styleUrls: ['./carrier-status.component.scss']
})
export class CarrierStatusComponent {
  notSureAllowed = false;

  constructor(public survey: SurveyService) { }

  get value(): number {
    return this.survey.getCarrierStatus();
  }

  set value(val: number) {
    this.survey.setCarrierStatus(val, {context: 'Carrier Status Step'});
  }
}
