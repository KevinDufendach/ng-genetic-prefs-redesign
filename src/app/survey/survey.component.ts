import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {STEPPER_GLOBAL_OPTIONS, StepperSelectionEvent} from '@angular/cdk/stepper';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

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
  step: number;

  constructor(private route: ActivatedRoute, private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
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
    this.route.queryParams.subscribe(params => {
      this.step = +params.step || 0;
    });
  }

  selectionChanged($event: StepperSelectionEvent) {
    this.step = $event.selectedIndex;

    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: {step: this.step},
        queryParamsHandling: 'merge'
      }
    );
  }
}
