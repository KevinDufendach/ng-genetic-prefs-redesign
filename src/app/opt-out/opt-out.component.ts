import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-opt-out',
  templateUrl: './opt-out.component.html',
  styleUrls: ['./opt-out.component.scss', '../../survey.scss']
})
export class OptOutComponent {
  notSureAllowed = false;

  constructor(private survey: SurveyService) { }

  get value(): number {
    return this.survey.getPreventability();
  }

  set value(val: number) {
    this.survey.setPreventability(val, {context: 'Preventability Step'});
  }

  get currentStep() {
    return 0;
  }

  set currentStep(val: number) {
    console.log('going to step' + val);
  }

}
