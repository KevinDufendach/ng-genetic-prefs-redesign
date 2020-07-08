import {Component, OnInit} from '@angular/core';
import {CONDITION_DATA} from '../model/condition';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  preventabilitySelection = -1;
  notSureAllowed = false;
  step = 1;
  stepCount = 3;

  constructor() {
  }

  ngOnInit() {
  }

  cycleStep() {
    this.step++;
    if (this.step >= this.stepCount) { this.step = 0; }
  }
}
