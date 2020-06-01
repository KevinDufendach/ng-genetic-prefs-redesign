import { Component, OnInit, Input } from '@angular/core';
import { Condition2 } from '../model/condition2';

@Component({
  selector: 'app-condition-block',
  templateUrl: './condition-block.component.html',
  styleUrls: ['./condition-block.component.scss']
})
export class ConditionBlockComponent implements OnInit {
  @Input() condition: Condition2;
  @Input() hidden: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getConditionIcon() {
    const c = this.condition;

    if (c.treatable) {
      if (c.preventable) {
        if (c.adultOnset) {
          return 'cchmc-venn-diagram.svg';
        } else {
          return 'cchmc-venn-left-upper.svg';
        }
      } else {
        if (c.adultOnset) {
          return 'cchmc-venn-right-upper.svg';
        } else {
          return 'circle-blue.svg';
        }
      }
    } else {
      if (c.preventable) {
        if (c.adultOnset) {
          return 'cchmc-left-right.svg';
        } else {
          return 'circle-pink.svg';
        }
      } else {
        if (c.adultOnset) {
          return 'circle-green.svg';
        } else {
          return 'circle.svg';
        }
      }
    }
  }
}
