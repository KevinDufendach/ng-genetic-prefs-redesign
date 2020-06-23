import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InstructionsComponent} from './instructions/instructions.component';
import {SurveyComponent} from './survey/survey.component';
import {ModeratorDashboardComponent} from './moderator-dashboard/moderator-dashboard.component';
import {VideosComponent} from './videos/videos.component';
import {SaveConfirmationComponent} from './save-confirmation/save-confirmation.component';
import { SurveyNavComponent } from './survey-nav/survey-nav.component';
import { IntroComponent } from './intro/intro.component';
import { OptOutComponent } from './opt-out/opt-out.component';
import { TreatabilityComponent } from './treatability/treatability.component';
import { PreventabilityComponent } from './preventability/preventability.component';
import { AdultOnsetComponent } from './adult-onset/adult-onset.component';
import { CarrierStatusComponent } from './carrier-status/carrier-status.component';
import { FinalReviewComponent } from './final-review/final-review.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'instructions',
    pathMatch: 'full'
  },
  {
    path: 'survey-nav',
    component: SurveyNavComponent
  },
  {
    path: 'instructions',
    component: InstructionsComponent
  },
  {
    path: 'survey',
    component: SurveyComponent,
    children:  [
      {path: '',  redirectTo: 'instructions', pathMatch: 'full'},
      {path: 'instructions', component: IntroComponent},
      {path: 'opt-out', component: OptOutComponent},
      {path: 'treatability', component: TreatabilityComponent},
      {path: 'preventability', component: PreventabilityComponent},
      {path: 'adult-onset', component: AdultOnsetComponent},
      {path: 'carrier-status', component: CarrierStatusComponent},
      {path: 'review', component: FinalReviewComponent},
    ]
  },
  {
    path: 'moderator',
    component: ModeratorDashboardComponent
  },
  {
    path: 'complete',
    component: SaveConfirmationComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
