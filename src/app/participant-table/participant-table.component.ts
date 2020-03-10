import { Component, OnInit } from '@angular/core';
import {DataManagerService} from '../data-manager.service';
import {Observable} from 'rxjs';
import {SelectionChangeEvent} from '../selection-logger.service';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-participant-table',
  templateUrl: './participant-table.component.html',
  styleUrls: ['./participant-table.component.scss']
})
export class ParticipantTableComponent implements OnInit {
  startYear = 2020;
  startMonth = 2;
  startDate = 27;
  startHour = 16;
  startMinute = 0;
  endYear = 2020;
  endMonth = 2;
  endDate = 27;
  endHour = 17;
  endMinute = 30;
  changeEvents: Observable<SelectionChangeEvent[]> | null;

  constructor(private dms: DataManagerService, private auth: AuthService) {
    // const startDate = new Date(2020, 1, 27, 16, 0);
    // const endDate = new Date(2020, 1, 27, 17, 30);

    // const start = new Date();
    // const end = new Date();


  }

  ngOnInit(): void {
  }

  getEvents() {
    this.auth.user.subscribe(u => {
      const startDate = new Date(this.startYear, this.startMonth - 1, this.startDate, this.startHour, this.startMinute);
      const endDate = new Date(this.endYear, this.endMonth - 1, this.endDate, this.endHour, this.endMinute);

      this.changeEvents = this.dms.getResultsDuringTimeRange(Timestamp.fromDate(startDate), Timestamp.fromDate(endDate));
    });
  }
}
