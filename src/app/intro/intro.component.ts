import {Component, OnInit} from '@angular/core';
import { stepAnimations } from './step-animations';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss', '../../survey.scss'],
  animations: [stepAnimations.horizontalStepTransition]
})
export class IntroComponent implements OnInit {
  preventabilitySelection = -1;
  notSureAllowed = false;
  selectedStep = 0;
  stepCount = 3;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedStep = +params.step || 0;
    });

    this.updateRouteQueryParameters();
  }

  getDirection(stepIndex: number) {
    if (stepIndex === this.selectedStep) { return 'current'; }

    return (stepIndex < this.selectedStep ? 'previous' : 'next');
  }

  advance(direction = 1) {
    this.selectedStep = this.selectedStep + direction;
    if (this.selectedStep < 0) {
      this.selectedStep = 0;
    }

    if (this.selectedStep >= this.stepCount) {
      this.router.navigate(['/opt-out']);
    } else {
      this.updateRouteQueryParameters();
    }
  }

  updateRouteQueryParameters() {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: {step: this.selectedStep},
        queryParamsHandling: 'merge'
      }
    );
  }

  isLastStep(): boolean {
    return (this.selectedStep + 1 >= this.stepCount);
  }
}
