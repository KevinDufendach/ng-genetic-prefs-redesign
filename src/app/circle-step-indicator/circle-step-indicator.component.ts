import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-step-indicator',
  templateUrl: './circle-step-indicator.component.html',
  styleUrls: ['./circle-step-indicator.component.scss']
})
export class CircleStepIndicatorComponent implements OnInit {
  @Input() step: number;
  @Input() count: number;

  constructor() { }

  ngOnInit(): void {
  }

}
