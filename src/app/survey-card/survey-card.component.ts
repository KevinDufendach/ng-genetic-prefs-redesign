import {Component, Input, OnInit, Output} from '@angular/core';
import {SurveyService} from '../survey.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss']
})
export class SurveyCardComponent implements OnInit {
  @Input() title: any;
  @Input() icon?: string;
  @Input() finalStep = false;

  constructor(private surveyService: SurveyService, private router: Router) { }

  ngOnInit() {
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
}
