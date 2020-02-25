import {Component, OnInit} from '@angular/core';
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
  displayedColumns: string[] = ['curable', 'preventable', 'adultOnset', 'carrier', 'name'];
  conditions: Condition2[] = (data as any).default;
  displayedCount = 10;

  constructor(public survey: SurveyService) {
  // constructor(public survey: SurveyService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // iconRegistry.addSvgIcon(
    //   'preventable',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/img/preventable.svg')
    // );
    //
    // iconRegistry.addSvgIcon(
    //   'curable',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/img/curable.svg')
    // );
    //
    // iconRegistry.addSvgIcon(
    //   'adultOnset',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/img/adult_onset.svg')
    // );
    //
    // iconRegistry.addSvgIcon(
    //   'carrier',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/img/carrier.svg')
    // );
  }

  ngOnInit(): void {
  }

  wouldReturnCondition(c: Condition2): boolean {
    return (
      ((c.curable || this.survey.curability) &&
      (c.preventable || this.survey.preventability) &&
      (!c.adultOnset || this.survey.adultOnset)) ||
      (c.carrier && this.survey.carrierStatus)
    );
  }
}
