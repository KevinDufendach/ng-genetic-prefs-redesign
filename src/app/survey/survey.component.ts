import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StepperSelectionEvent} from '@angular/cdk/stepper';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  private step: number;

  constructor(private route: ActivatedRoute, private router: Router) {
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
        queryParams: { step: this.step},
        queryParamsHandling: 'merge'
      }
    );
  }
}
