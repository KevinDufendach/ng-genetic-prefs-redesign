import { Component, OnInit } from '@angular/core';
import {DataManagerService} from '../data-manager.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  constructor(private dms: DataManagerService) { }

  ngOnInit() {
  }

  setRole(role: string) {
    console.log('setting role: ' + role);

    this.dms.setRole(role);
  }
}
