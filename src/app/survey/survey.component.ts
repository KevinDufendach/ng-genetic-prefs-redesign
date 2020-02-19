import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StepperSelectionEvent} from '@angular/cdk/stepper';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  step: number;

  constructor(private route: ActivatedRoute, private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'preventable',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/preventable.svg')
    );

    iconRegistry.addSvgIcon(
      'curable',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/curable.svg')
    );

    iconRegistry.addSvgIcon(
      'adultOnset',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/adult_onset.svg')
    );

    iconRegistry.addSvgIcon(
      'carrier',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/carrier.svg')
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
