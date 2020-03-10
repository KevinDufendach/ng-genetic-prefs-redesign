import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InstructionsComponent} from './instructions/instructions.component';
import {SurveyComponent} from './survey/survey.component';
import {ModeratorDashboardComponent} from './moderator-dashboard/moderator-dashboard.component';
import {VideosComponent} from './videos/videos.component';
import {SaveConfirmationComponent} from './save-confirmation/save-confirmation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'instructions',
    pathMatch: 'full'
  },
  {
    path: 'instructions',
    component: InstructionsComponent
  },
  {
    path: 'survey',
    component: SurveyComponent
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
