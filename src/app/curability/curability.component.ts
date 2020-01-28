import { Component, OnInit } from '@angular/core';
import {CONDITION_DATA} from '../model/condition';

@Component({
  selector: 'app-curability',
  templateUrl: './curability.component.html',
  styleUrls: ['./curability.component.scss']
})
export class CurabilityComponent implements OnInit {
  preventabilitySelection = -1;
  displayedColumns: string[] = ['preventable', 'name'];
  dataSource = CONDITION_DATA;

  constructor() { }

  ngOnInit() {
  }

}
