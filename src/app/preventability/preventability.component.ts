import {Component, OnInit} from '@angular/core';
import {SurveyService} from '../survey.service';
import {SURVEY_STEP} from '../condition-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { stepAnimations } from '../step-animations';

@Component({
  selector: 'app-preventability',
  templateUrl: './preventability.component.html',
  styleUrls: ['./preventability.component.scss', '../../survey.scss'],
  animations: [stepAnimations.verticalStepTransition]
})
export class PreventabilityComponent implements OnInit {
  surveySteps = SURVEY_STEP;
  notSureAllowed = false;
  stepCount = 2;
  page = 0;

  testRadioResponse: boolean | null = null;

  constructor(
    public survey: SurveyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  get value(): number {
    return this.survey.getPreventability();
  }

  set value(val: number) {
    this.survey.setPreventability(val, {context: 'Preventability Step'});
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
      this.router.navigate(['/treatability']);
    } else if (this.page >= this.stepCount) {
      this.router.navigate(['/adult-onset']);
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
