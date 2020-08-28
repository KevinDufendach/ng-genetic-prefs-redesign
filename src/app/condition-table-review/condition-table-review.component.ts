import {Component, OnInit} from '@angular/core';
import {Parameter, SurveyService} from '../survey.service';
import {ConditionManagerService} from '../condition-manager.service';

import {Condition2, Override} from '../model/condition2';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-condition-table-review',
  templateUrl: './condition-table-review.component.html',
  styleUrls: ['./condition-table-review.component.scss']
})
export class ConditionTableReviewComponent implements OnInit {
  conditions: Condition2[];
  Parameter = Parameter;
  Override = Override;

  displayedColumns = ['treatability', 'preventability', 'adult-onset', 'carrier-status', 'condition-label'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    public survey: SurveyService,
    private conditionManager: ConditionManagerService,
    private breakpointObserver: BreakpointObserver,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIcon('circle', sanitizer.bypassSecurityTrustResourceUrl('assets/img/circle.svg'));
  }

  ngOnInit(): void {
    this.conditions = this.conditionManager.conditions;
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

