import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {noop} from 'rxjs';

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss']
})
export class SurveyCardComponent implements OnInit {
  @Input() title: any;
  @Input() icon?: string;

  // @Output() backFunction = noop;
  // @Output() forwardFunction = noop;

  constructor() { }

  ngOnInit() {
  }

}
