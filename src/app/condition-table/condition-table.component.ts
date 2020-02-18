import {Component, OnInit} from '@angular/core';
// import {CONDITION_DATA} from '../model/condition';
import {SurveyService} from '../survey.service';

// @ts-ignore
import * as data from '../model/condition_list.json';
import {Condition2} from '../model/condition2';

@Component({
  selector: 'app-condition-table',
  templateUrl: './condition-table.component.html',
  styleUrls: ['./condition-table.component.scss']
})
export class ConditionTableComponent implements OnInit {
  displayedColumns: string[] = ['preventable', 'name'];
  // dataSource = CONDITION_DATA;

  conditions: Condition2[] = (data as any).default;

  constructor(public survey: SurveyService) {
  }

  ngOnInit(): void {
    console.log(this.conditions);
  }

}
