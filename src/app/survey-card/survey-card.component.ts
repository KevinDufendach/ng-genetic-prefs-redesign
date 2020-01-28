import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss']
})
export class SurveyCardComponent implements OnInit {
  @Input() title: any;

  constructor() { }

  ngOnInit() {
  }

}
