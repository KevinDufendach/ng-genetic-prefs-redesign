import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey-actions-bar',
  templateUrl: './survey-actions-bar.component.html',
  styleUrls: ['./survey-actions-bar.component.scss']
})
export class SurveyActionsBarComponent implements OnInit {
  @Input() forwardLink: string;
  @Input() backwardLink: string;

  constructor() { }

  ngOnInit(): void {
  }

}
