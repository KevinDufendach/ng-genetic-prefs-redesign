import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opt-out',
  templateUrl: './opt-out.component.html',
  styleUrls: ['./opt-out.component.scss']
})
export class OptOutComponent implements OnInit {
  notSureAllowed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
