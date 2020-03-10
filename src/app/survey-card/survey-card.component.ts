import {Component, Input, OnInit, Output} from '@angular/core';
import {SurveyService} from '../survey.service';

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss']
})
export class SurveyCardComponent implements OnInit {
  @Input() title: any;
  @Input() icon?: string;
  @Input() finalStep = false;

  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
  }

  submit() {
    this.surveyService.logSelections('submit');
  }
}
