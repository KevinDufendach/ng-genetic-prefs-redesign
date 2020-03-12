import {Injectable} from '@angular/core';
import {Condition2} from './model/condition2';
import {SurveyService} from './survey.service';

export enum SURVEY_STEP {
  UNDEFINED = -1,
  CURABILITY,
  PREVENTABILITY,
  ADULT_ONSET,
  CARRIER_STATUS
}

@Injectable({
  providedIn: 'root'
})
export class ConditionManagerService {

  constructor(private surveyService: SurveyService) {
  }

  private static wrc(c: Condition2, curability, preventability, adultOnset, carrierStatus) {
    return (
      ((c.curable || curability) &&
        (c.preventable || preventability) &&
        (!c.adultOnset || adultOnset)) ||
      (c.carrier && carrierStatus)
    );
  }

  wouldReturnCondition(c: Condition2): boolean {
    return ConditionManagerService.wrc(
      c,
      this.surveyService.curability,
      this.surveyService.preventability,
      this.surveyService.adultOnset,
      this.surveyService.carrierStatus
    );
  }

  conditionModifiedByStep(c: Condition2, step: SURVEY_STEP): boolean {
    switch (step) {
      case SURVEY_STEP.CURABILITY:
        return !c.curable;
      case SURVEY_STEP.PREVENTABILITY:
        return !c.preventable;
      case SURVEY_STEP.ADULT_ONSET:
        return c.adultOnset;
      case SURVEY_STEP.CARRIER_STATUS:
        return c.carrier;
    }

    return false;
  }

  conditionWouldModifyAtStep(c: Condition2, step: SURVEY_STEP): boolean {
    const curability = this.surveyService.curability;
    const preventability = this.surveyService.preventability;
    const adultOnset = this.surveyService.adultOnset;
    const carrierStatus = this.surveyService.carrierStatus;

    switch (step) {
      case SURVEY_STEP.CURABILITY:
        return (ConditionManagerService.wrc(
            c, curability, preventability, adultOnset, carrierStatus
          ) !== ConditionManagerService.wrc(
            c, !curability, preventability, adultOnset, carrierStatus
          )
        );
      case SURVEY_STEP.PREVENTABILITY:
        // console.log('In Curability: ' +
        //   ConditionManagerService.wrc(c, curability, preventability, adultOnset, carrierStatus) + ' : ' +
        //   ConditionManagerService.wrc(c, !curability, preventability, adultOnset, carrierStatus)
        // );

        return (ConditionManagerService.wrc(
            c, curability, preventability, adultOnset, carrierStatus
          ) !== ConditionManagerService.wrc(
            c, curability, !preventability, adultOnset, carrierStatus
          )
        );
      case SURVEY_STEP.ADULT_ONSET:
        return (ConditionManagerService.wrc(
            c, curability, preventability, adultOnset, carrierStatus
          ) !== ConditionManagerService.wrc(
            c, curability, preventability, !adultOnset, carrierStatus
          )
        );
      case SURVEY_STEP.CARRIER_STATUS:
        return (ConditionManagerService.wrc(
            c, curability, preventability, adultOnset, carrierStatus
          ) !== ConditionManagerService.wrc(
            c, !curability, preventability, adultOnset, !carrierStatus
          )
        );
    }

    return false;
  }
}
