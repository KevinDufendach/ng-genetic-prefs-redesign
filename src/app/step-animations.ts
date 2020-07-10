import { AnimationTriggerMetadata, trigger, state, style, transition, animate } from '@angular/animations';

export const stepAnimations: {
  readonly horizontalStepTransition: AnimationTriggerMetadata;
  readonly verticalStepTransition: AnimationTriggerMetadata;
} = {
  /** Animation that transitions the step along the X axis in a horizontal stepper. */
  /** https://github.com/angular/components/blob/master/src/material/stepper/stepper-animations.ts */
  horizontalStepTransition: trigger('stepTransition', [
    state('previous', style({transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden'})),
    state('current', style({transform: 'none', visibility: 'visible'})),
    state('next', style({transform: 'translate3d(100%, 0, 0)', visibility: 'hidden'})),
    transition('* => *', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
  ]),

  /** Animation that transitions the step along the Y axis in shared space */
  verticalStepTransition: trigger('stepTransition', [
    state('previous', style({transform: 'translate3d(0, -100%, 0)', visibility: 'hidden'})),
    state('current', style({transform: 'none', visibility: 'visible'})),
    state('next', style({transform: 'translate3d(0, 100%, 0)', visibility: 'hidden'})),
    transition('* => *', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
  ]),

  // /** Animation that transitions the step along the Y axis in a vertical stepper. */
  // verticalStepTransition: trigger('stepTransition', [
  //   state('previous', style({height: '0px', visibility: 'hidden'})),
  //   state('next', style({height: '0px', visibility: 'hidden'})),
  //   state('current', style({height: '*', visibility: 'visible'})),
  //   transition('* <=> current', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
  // ])
};
