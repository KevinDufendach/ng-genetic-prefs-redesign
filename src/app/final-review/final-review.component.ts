import { Component, OnInit } from '@angular/core';
import {SurveyService} from '../survey.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-final-review',
  templateUrl: './final-review.component.html',
  styleUrls: ['./final-review.component.scss', '../../survey.scss']
})
export class FinalReviewComponent implements OnInit {

  constructor(
    public survey: SurveyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
