import {Component, Input, OnInit} from '@angular/core';
import {SurveyService} from '../survey.service';
// @ts-ignore
import * as data from '../../assets/condition_list.json';
import {Condition2} from '../model/condition2';

@Component({
  selector: 'app-condition-table',
  templateUrl: './condition-table.component.html',
  styleUrls: ['./condition-table.component.scss']
})
export class ConditionTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'curable', 'preventable', 'adultOnset', 'carrier'];
  columnOptions: string[] = ['name', 'curable', 'preventable', 'adultOnset', 'carrier'];
  conditions: Condition2[] = (data as any).default;
  @Input() state = -1;

  constructor(public survey: SurveyService) {
  }

  ngOnInit(): void {
    if (this.state > -1) {
      this.displayedColumns = this.columnOptions.slice(0, this.state + 2);
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

  wouldReturnCondition(c: Condition2): boolean {
    return (
      ((c.curable || this.curability) &&
      (c.preventable || this.preventability) &&
      (!c.adultOnset || this.adultOnset)) ||
      (c.carrier && this.carrierStatus)
    );
  }
}
