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
  stepCount = 5;
  _page = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

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
}
