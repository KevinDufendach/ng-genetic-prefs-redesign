import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { cchmcGray, cchmcGreen, cchmcPink, cchmcBlue } from 'src/cchmc-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // stepTitle: Observable<string>;
  // stepClass: Observable<string>;
  stepColor: Observable<string> = of(cchmcGray);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
      // public auth: AuthService,
      private route: ActivatedRoute,
      private router: Router,
      private breakpointObserver: BreakpointObserver) {  }

  ngOnInit(): void {
    this.stepColor = this.router.events.pipe(map(() => {
      if (this.route.snapshot.firstChild) {
        return this.getStepColor(this.route.snapshot.firstChild.routeConfig.path);
      } else {
        return cchmcGray;
      }
    }));

    // this.stepColor

    // = this.route.url.pipe(map(() => this.route.snapshot.firstChild.routeConfig.path));
    // this.stepTitle = this.stepClass.pipe(map(sc => this.getStepColor(sc)));
  }

  private getStepColor(path: string | null) {
    if (path) {
      switch (path) {
        case 'intro':
          return cchmcGray;
        case 'opt-out':
          return cchmcGray;
        case 'treatability':
          return cchmcGreen;
        case 'preventability':
          return cchmcPink;
        case 'adult-onset':
          return cchmcBlue;
        case 'carrier-status':
          return cchmcGray;
        case 'review':
          return cchmcBlue;
        default:
          return 'cchmcGray';
      }
    }
  }
}
