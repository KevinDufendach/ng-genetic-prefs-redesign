import { Component, OnInit } from '@angular/core';
import {SurveyService} from '../survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { stepAnimations } from '../step-animations';

@Component({
  selector: 'app-carrier-status',
  templateUrl: './carrier-status.component.html',
  styleUrls: ['./carrier-status.component.scss', '../../survey.scss'],
  animations: [stepAnimations.verticalStepTransition]
})
export class CarrierStatusComponent implements OnInit {
  notSureAllowed = false;
  stepCount = 2;
  page = 0;

  constructor(
    public survey: SurveyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  get value(): number {
    return this.survey.getCarrierStatus();
  }

  set value(val: number) {
    this.survey.setCarrierStatus(val, {context: 'Carrier Status Step'});
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.page = +params.page || 0;
    });

    this.updateRouteQueryParameters();
  }

  navigate(direction = 1) {
    this.page = this.page + direction;

    if (this.page < 0) {
      this.router.navigate(['/adult-onset']);
    } else if (this.page >= this.stepCount) {
      this.router.navigate(['/review']);
    } else {
      this.updateRouteQueryParameters();
    }
  }

  updateRouteQueryParameters() {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: {page: this.page},
        queryParamsHandling: 'merge'
      }
    );
  }

  getDirection(stepIndex: number) {
    if (stepIndex === this.page) { return 'current'; }

    return (stepIndex < this.page ? 'previous' : 'next');
  }
}
