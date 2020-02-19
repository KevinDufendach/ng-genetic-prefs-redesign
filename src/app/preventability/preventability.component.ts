import {Component} from '@angular/core';
import {SurveyService} from '../survey.service';

@Component({
  selector: 'app-preventability',
  templateUrl: './preventability.component.html',
  styleUrls: ['./preventability.component.scss']
})
export class PreventabilityComponent {
  notSureAllowed = false;

  constructor(public survey: SurveyService) { }
}
