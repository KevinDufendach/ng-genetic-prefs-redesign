import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  stepTitle: Observable<string>;
  stepClass: Observable<string>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    public auth: AuthService,
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.stepClass = this.route.url.pipe(map(() => this.route.snapshot.firstChild.routeConfig.path));
    this.stepTitle = this.stepClass.pipe(map(sc => this.getStepTitle(sc)));
  }

  private getStepTitle(path: string | null) {
    if (path) {
      switch (path) {
        case 'instructions':
          return 'Introduction';
        case 'opt-out':
          return 'Opt Out';
        case 'treatability':
          return 'Treatability';
        case 'preventability':
          return 'Preventability';
        case 'adult-onset':
          return 'Adult Onset';
        case 'carrier-status':
          return 'Carrier Status';
        case 'review':
          return 'Final Review';
        default:
          return '';
      }
    }
  }
}
