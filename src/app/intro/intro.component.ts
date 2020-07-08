import {Component, OnInit} from '@angular/core';
import { stepAnimations } from './step-animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
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

  cycleStep() {
    this.selectedStep++;
    if (this.selectedStep >= this.stepCount) { this.selectedStep = 0; }
  }
}
