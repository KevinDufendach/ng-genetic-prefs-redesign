import {Component, OnInit} from '@angular/core';
import {CONDITION_DATA} from '../model/condition';

@Component({
  selector: 'app-preventability',
  templateUrl: './preventability.component.html',
  styleUrls: ['./preventability.component.scss']
})
export class PreventabilityComponent implements OnInit {
  preventabilitySelection = -1;
  displayedColumns: string[] = ['preventable', 'name'];
  dataSource = CONDITION_DATA;

  constructor() { }

  ngOnInit() {
  }

}
