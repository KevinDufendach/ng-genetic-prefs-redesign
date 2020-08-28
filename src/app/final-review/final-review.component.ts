import { Component, OnInit } from '@angular/core';
import {SurveyService} from '../survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { stepAnimations } from '../step-animations';

@Component({
  selector: 'app-final-review',
  templateUrl: './final-review.component.html',
  styleUrls: ['./final-review.component.scss', '../../survey.scss'],
  animations: [stepAnimations.horizontalStepTransition]
})
export class FinalReviewComponent implements OnInit {
  _page = 0;
  stepCount = 5;

  constructor(
    public survey: SurveyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.page = +params.page || 0;
    });
  }

  set page(val: number) {
    this._page = val;
    this.updateRouteQueryParameters();
  }

  get page(): number {
    return this._page;
  }

  navigate(direction = 1) {
    this.page = this.page + direction;
  }

  updateRouteQueryParameters() {
    if (this.page < 0) {
      this.page = 0;
    } else if (this.page >= this.stepCount) {
      this.router.navigate(['/opt-out']);
    } else {
      this.router.navigate(
        [],
        {
          relativeTo: this.route,
          queryParams: {page: this.page},
          queryParamsHandling: 'merge'
        }
      );
    }
  }

  isLastStep(): boolean {
    return (this.page + 1 >= this.stepCount);
  }

  getDirection(stepIndex: number | number[]) {
    if (Array.isArray(stepIndex)) {
      if (stepIndex.indexOf(this.page) > -1) { return 'current'; }
      return (Math.max.apply(stepIndex) < this.page ? 'previous' : 'next' );
    }

    if (stepIndex === this.page) { return 'current'; }

    return (stepIndex < this.page ? 'previous' : 'next');
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
