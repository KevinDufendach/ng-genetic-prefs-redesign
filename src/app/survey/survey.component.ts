import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {STEPPER_GLOBAL_OPTIONS, StepperSelectionEvent} from '@angular/cdk/stepper';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {AuthService} from '../auth.service';
import {SurveyService} from '../survey.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

const STEP_COUNT = 7;

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: {displayDefaultIndicatorType: false}
  }]
})
export class SurveyComponent implements OnInit {
  step = 0;
  stepTitle: Observable<string>;
  stepClass: Observable<string>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private surveyService: SurveyService,
    private breakpointObserver: BreakpointObserver,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    this.registerIcons(iconRegistry, sanitizer);
  }

  // ngOnInit() {
  //   this.auth.login();
  //
  //   this.route.queryParams.subscribe(params => {
  //     this.step = +params.step || 0;
  //   });
  // }
  //
  // selectionChanged($event: StepperSelectionEvent) {
  //   this.step = $event.selectedIndex;
  //
  //   this.router.navigate(
  //     [],
  //     {
  //       relativeTo: this.route,
  //       queryParams: {step: this.step},
  //       queryParamsHandling: 'merge'
  //     }
  //   );
  // }

  registerIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
      .addSvgIcon(
        'preventable',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/preventable_black.svg')
      )
      .addSvgIcon(
        'curable',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/curable_black.svg')
      )
      .addSvgIcon(
        'adultOnset',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/adult_onset_black.svg')
      )
      .addSvgIcon(
        'carrier',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/carrier_black.svg')
      )
      .addSvgIcon(
        'preventable_circle',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/preventable_circle.svg')
      )
      .addSvgIcon(
        'curable_circle',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/curable_circle.svg')
      )
      .addSvgIcon(
        'adultOnset_circle',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/adult_onset_circle.svg')
      )
      .addSvgIcon(
        'carrier_circle',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/carrier_circle.svg')
      );
  }

  ngOnInit() {
    this.auth.login();

    // this.route.queryParams.subscribe(params => {
    //   this.step = +params.step || 0;
    // });

    this.stepClass = this.route.url.pipe(map(() => this.route.snapshot.firstChild.routeConfig.path));
    this.stepTitle = this.stepClass.pipe(map(sc => this.getStepTitle(sc)));

    // this.route.url.subscribe(() => {
    //   this.stepClass = this.route.snapshot.firstChild.routeConfig.path;
    //   this.stepTitle = this.getStepTitle(this.stepClass);
    //  });

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  selectionChanged($event: StepperSelectionEvent) {
    this.onStepChange($event.selectedIndex);
  }

  forwardStep() {
    // Check to be sure another step exists
    if (this.step + 1 < STEP_COUNT) {
      this.onStepChange(this.step + 1);
    } else {
      console.log('unable to advance to next step');
    }
  }

  backwardStep() {
    // Check to be sure another step exists
    if (this.step > 0) {
      this.onStepChange(this.step - 1);
    } else {
      console.log('unable to advance to next step');
    }
  }

  onStepChange(newStep: number) {
    this.step = newStep;

    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: {step: this.step},
        queryParamsHandling: 'merge'
      }
    );
  }

  submit() {
    this.surveyService.logSelections({context: 'submit'})
      .then(() => {
        console.log('selections saved');
        this.complete();
      })
      .catch(() => {
        console.log('there was an error saving the selections');
      });
  }

  private complete() {
    this.router.navigate(['/complete']);
  }

  private getStepTitle(path: string | null) {
    if (path) {
      switch (path) {
        case 'instructions':
          return 'Instructions';
        case 'opt-out':
          return 'Opt Out';
        case 'treatability':
          return 'Treatability';
        case 'preventability':
          return 'Preventability';
        case 'adult-onset':
          return 'Adult Onset';
        case 'carrier-status':
          return 'Carrier Status';
        case 'review':
          return 'Final Review';
        default:
          return '';
      }
    }
  }
}
