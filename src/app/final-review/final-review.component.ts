import { Component, OnInit } from '@angular/core';
import {SurveyService} from '../survey.service';

@Component({
  selector: 'app-final-review',
  templateUrl: './final-review.component.html',
  styleUrls: ['./final-review.component.scss']
})
export class FinalReviewComponent implements OnInit {

  constructor(private survey: SurveyService) { }

  ngOnInit(): void {
  }

  get preventability(): number {
    return this.survey.getPreventability();
  }

  set preventability(val: number) {
    this.survey.setPreventability(val, {context: 'Final Review'});
  }


  get treatability(): number {
    return this.survey.getTreatability();
  }

  set treatability(val: number) {
    this.survey.setTreatability(val, {context: 'Final Review'});
  }

  get adultOnset(): number {
    return this.survey.getAdultOnset();
  }

  set adultOnset(val: number) {
    this.survey.setAdultOnset(val, {context: 'Final Review'});
  }


  get carrierStatus(): number {
    return this.survey.getCarrierStatus();
  }

  set carrierStatus(val: number) {
    this.survey.setCarrierStatus(val, {context: 'Final Review'});
  }
}
