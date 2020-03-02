import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-moderator-dashboard',
  templateUrl: './moderator-dashboard.component.html',
  styleUrls: ['./moderator-dashboard.component.scss']
})
export class ModeratorDashboardComponent implements OnInit {
  isLoggedInWithCreds = false;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user.subscribe(u => {
      this.isLoggedInWithCreds = !(u == null) && !u.isAnonymous;
    });
  }

}
