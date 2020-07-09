import {Component, OnInit} from '@angular/core';
import { stepAnimations } from './step-animations';

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

  constructor() {
  }

  ngOnInit() {
  }

  getDirection(stepIndex: number) {
    if (stepIndex === this.selectedStep) { return 'current'; }

    return (stepIndex < this.selectedStep ? 'previous' : 'next');
  }

  cycleStep(direction = 1) {
    this.selectedStep = this.selectedStep + direction;
    if (this.selectedStep < 0) { this.selectedStep = this.stepCount - 1; }
    if (this.selectedStep >= this.stepCount) { this.selectedStep = 0; }
  }
}
