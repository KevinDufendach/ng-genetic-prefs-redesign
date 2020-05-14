import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-opt-out',
  templateUrl: './opt-out.component.html',
  styleUrls: ['./opt-out.component.scss']
})
export class OptOutComponent implements OnInit {
  notSureAllowed = false;

  constructor(private survey: SurveyService) { }

  ngOnInit(): void {
  }

  get value(): number {
    return this.survey.getPreventability();
  }

  set value(val: number) {
    this.survey.setPreventability(val, {context: 'Preventability Step'});
  }

}
