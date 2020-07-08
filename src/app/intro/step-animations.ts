import { AnimationTriggerMetadata, trigger, state, style, transition, animate } from '@angular/animations';

export const stepAnimations: {
  readonly horizontalStepTransition: AnimationTriggerMetadata;
} = {
  /** Animation that transitions the step along the X axis in a horizontal stepper. */
  /** https://github.com/angular/components/blob/master/src/material/stepper/stepper-animations.ts */
  horizontalStepTransition: trigger('stepTransition', [
    state('previous', style({transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden'})),
    state('current', style({transform: 'none', visibility: 'visible'})),
    state('next', style({transform: 'translate3d(100%, 0, 0)', visibility: 'hidden'})),
    transition('* => *', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
  ]),
};
