import {Component, Input, OnInit} from '@angular/core';
import {SurveyService} from '../survey.service';
// @ts-ignore
import * as data from '../../assets/condition_list.json';
import {Condition2} from '../model/condition2';
import {ConditionManagerService, SURVEY_STEP} from '../condition-manager.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-condition-table',
  templateUrl: './condition-table.component.html',
  styleUrls: ['./condition-table.component.scss']
})
export class ConditionTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'curable', 'preventable', 'adultOnset', 'carrier'];
  conditions: Condition2[];
  // conditions: Condition2[] = (data as any).default;
  @Input() state = SURVEY_STEP.UNDEFINED;

  constructor(public survey: SurveyService, private conditionManager: ConditionManagerService) {
  }

  ngOnInit(): void {
    console.log(this.state);

    if (this.state < 0) {
      this.conditions = (data as any).default;
    } else {
      this.displayedColumns = this.displayedColumns.slice(0, this.state + 2);

      const conditions: Condition2[] = (data as any).default;

      this.conditions = [];
      for (const cond of conditions) {
        if (this.conditionManager.conditionWouldModifyAtStep(cond, this.state)) {
          // console.log(this.state);
          // console.log(cond.description);
          this.conditions.push(cond);
        }
      }
    }
  }

  get curability(): boolean {
    return this.survey.getCurability() === 1;
  }

  set curability(val: boolean) {
    if (this.curability === val) { return; }

    this.survey.setCurability(
      (val ? 1 : 0),
      {context: 'condition table'}
    );
  }

  get preventability(): boolean {
    return this.survey.getPreventability() === 1;
  }

  set preventability(val: boolean) {
    if (this.preventability === val) { return; }

    this.survey.setPreventability(
      (val ? 1 : 0),
      {context: 'condition table'}
    );
  }

  get adultOnset(): boolean {
    return this.survey.getAdultOnset() === 1;
  }

  set adultOnset(val: boolean) {
    if (this.adultOnset === val) { return; }

    this.survey.setAdultOnset(
      (val ? 1 : 0),
      {context: 'condition table'}
    );
  }

  get carrierStatus(): boolean {
    return this.survey.getCarrierStatus() === 1;
  }

  set carrierStatus(val: boolean) {
    if (this.carrierStatus === val) { return; }

    this.survey.setCarrierStatus(
      (val ? 1 : 0),
      {context: 'condition table'}
    );
  }

  wouldReturnCondition(c: Condition2) {
    return this.conditionManager.wouldReturnCondition(c);
  }
}
