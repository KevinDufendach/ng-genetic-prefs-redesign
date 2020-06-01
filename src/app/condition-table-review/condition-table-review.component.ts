import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { ConditionManagerService } from '../condition-manager.service';
import * as data from '../../assets/condition_list.json';
import {Condition2} from '../model/condition2';

@Component({
  selector: 'app-condition-table-review',
  templateUrl: './condition-table-review.component.html',
  styleUrls: ['./condition-table-review.component.scss']
})
export class ConditionTableReviewComponent implements OnInit {
  conditions: Condition2[];

  constructor(public survey: SurveyService, private conditionManager: ConditionManagerService) { }

  ngOnInit(): void {
    this.conditions = (data as any).default;
  }

  wouldReturnCondition(c: Condition2) {
    return this.conditionManager.wouldReturnCondition(c);
  }
}
