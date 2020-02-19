import { Component, OnInit } from '@angular/core';
import {CONDITION_DATA} from '../model/condition';
import {SurveyService} from '../survey.service';

@Component({
  selector: 'app-curability',
  templateUrl: './curability.component.html',
  styleUrls: ['./curability.component.scss']
})
export class CurabilityComponent {
  notSureAllowed = false;

  constructor(public survey: SurveyService) { }
}
