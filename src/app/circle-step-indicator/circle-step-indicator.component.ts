import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-circle-step-indicator',
  templateUrl: './circle-step-indicator.component.html',
  styleUrls: ['./circle-step-indicator.component.scss']
})
export class CircleStepIndicatorComponent {
  @Input() step = 0;
  @Output() stepChange = new EventEmitter<number>();

  @Input() count = 1;

  selectStep(newStep: number) {
    this.step = newStep;
    this.stepChange.emit(this.step);
  }
}
