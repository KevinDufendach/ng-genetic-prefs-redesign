import {Injectable} from '@angular/core';
import {Condition2} from './model/condition2';
import {SurveyService} from './survey.service';

export enum SURVEY_STEP {
  UNDEFINED = -1,
  TREATABILITY,
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

  private static wrc(c: Condition2, treatable, preventability, adultOnset, carrierStatus) {
    return (
      ((c.treatable || treatable) &&
        (c.preventable || preventability) &&
        (!c.adultOnset || adultOnset)) ||
      (c.carrier && carrierStatus)
    );
  }

  wouldReturnCondition(c: Condition2): boolean {
    return ConditionManagerService.wrc(
      c,
      this.surveyService.treatability,
      this.surveyService.preventability,
      this.surveyService.adultOnset,
      this.surveyService.carrierStatus
    );
  }

  conditionModifiedByStep(c: Condition2, step: SURVEY_STEP): boolean {
    switch (step) {
      case SURVEY_STEP.TREATABILITY:
        return !c.treatable;
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
    const treatability = this.surveyService.treatability;
    const preventability = this.surveyService.preventability;
    const adultOnset = this.surveyService.adultOnset;
    const carrierStatus = this.surveyService.carrierStatus;

    switch (step) {
      case SURVEY_STEP.TREATABILITY:
        return (ConditionManagerService.wrc(
            c, treatability, preventability, adultOnset, carrierStatus
          ) !== ConditionManagerService.wrc(
            c, !treatability, preventability, adultOnset, carrierStatus
          )
        );
      case SURVEY_STEP.PREVENTABILITY:
        return (ConditionManagerService.wrc(
            c, treatability, preventability, adultOnset, carrierStatus
          ) !== ConditionManagerService.wrc(
            c, treatability, !preventability, adultOnset, carrierStatus
          )
        );
      case SURVEY_STEP.ADULT_ONSET:
        return (ConditionManagerService.wrc(
            c, treatability, preventability, adultOnset, carrierStatus
          ) !== ConditionManagerService.wrc(
            c, treatability, preventability, !adultOnset, carrierStatus
          )
        );
      case SURVEY_STEP.CARRIER_STATUS:
        return (ConditionManagerService.wrc(
            c, treatability, preventability, adultOnset, carrierStatus
          ) !== ConditionManagerService.wrc(
            c, !treatability, preventability, adultOnset, !carrierStatus
          )
        );
    }

    return false;
  }
}
