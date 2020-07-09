import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-circle-step-indicator',
  templateUrl: './circle-step-indicator.component.html',
  styleUrls: ['./circle-step-indicator.component.scss']
})
export class CircleStepIndicatorComponent {
  @Input() step = 0;
  @Input() selectionEnabled = true;
  @Output() stepChange = new EventEmitter<number>();

  @Input() count = 1;

  selectStep(newStep: number) {
    if (this.selectionEnabled) {
      this.step = newStep;
      this.stepChange.emit(this.step);
    }
  }
}
