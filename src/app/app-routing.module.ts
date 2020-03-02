import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InstructionsComponent} from './instructions/instructions.component';
import {SurveyComponent} from './survey/survey.component';
import {ModeratorDashboardComponent} from './moderator-dashboard/moderator-dashboard.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
