import {Component, OnInit} from '@angular/core';
import {CONDITION_DATA} from '../model/condition';
import {SurveyService} from '../survey.service';

@Component({
  selector: 'app-condition-table',
  templateUrl: './condition-table.component.html',
  styleUrls: ['./condition-table.component.scss']
})
export class ConditionTableComponent implements OnInit {
  displayedColumns: string[] = ['preventable', 'name'];
  dataSource = CONDITION_DATA;

  constructor(public survey: SurveyService) { }

  ngOnInit(): void {
  }

}
