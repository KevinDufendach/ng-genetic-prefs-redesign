import {Component, OnInit} from '@angular/core';
import { stepAnimations } from '../step-animations';
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
  page = 0;
  stepCount = 3;

  constructor(private router: Router, private route: ActivatedRoute) {
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
      this.page = 0;
    }

    if (this.page >= this.stepCount) {
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
        queryParams: {page: this.page},
        queryParamsHandling: 'merge'
      }
    );
  }

  isLastStep(): boolean {
    return (this.page + 1 >= this.stepCount);
  }

  getDirection(stepIndex: number) {
    if (stepIndex === this.page) { return 'current'; }

    return (stepIndex < this.page ? 'previous' : 'next');
  }
}
