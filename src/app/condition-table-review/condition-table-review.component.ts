import {Component, OnInit} from '@angular/core';
import {Parameter, SurveyService} from '../survey.service';
import {ConditionManagerService} from '../condition-manager.service';
import * as data from '../../assets/condition_list.json';
import {Condition2} from '../model/condition2';

@Component({
  selector: 'app-condition-table-review',
  templateUrl: './condition-table-review.component.html',
  styleUrls: ['./condition-table-review.component.scss']
})
export class ConditionTableReviewComponent implements OnInit {
  conditions: Condition2[];
  Parameter = Parameter;

  constructor(public survey: SurveyService, private conditionManager: ConditionManagerService) {
  }

  ngOnInit(): void {
    this.conditions = (data as any).default;
  }

  wouldReturnCondition(c: Condition2) {
    return this.conditionManager.wouldReturnCondition(c);
  }

  getIcon(hasParameter: boolean, parameter: Parameter) {
    const status = this.survey.getParameter(parameter);

    switch (parameter) {
      case Parameter.Treatability:
      case Parameter.Preventability:
        if (hasParameter) {
          return 'check_circle';
        } else {
          return (status ? 'remove_circle' : 'remove');
        }
      case Parameter.Carrier:
      case Parameter.AdultOnset:
        if (hasParameter) {
          return (status ? 'check_circle' : 'check');
        } else {
          return 'remove_circle';
        }
    }
    //
    // if (hasParameter) {
    //   return (status ? 'check_circle' : 'check');
    // } else {
    //   return (status ? 'remove_circle' : 'remove');
    // }
  }


}

