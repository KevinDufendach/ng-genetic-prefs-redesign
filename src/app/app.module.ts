import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SurveyComponent} from './survey/survey.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';

import {InstructionsComponent} from './instructions/instructions.component';
import {PreventabilityComponent} from './preventability/preventability.component';
import {IntroComponent} from './intro/intro.component';
import { CurabilityComponent } from './curability/curability.component';
import { SurveyCardComponent } from './survey-card/survey-card.component';
import { ConditionTableComponent } from './condition-table/condition-table.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    SurveyComponent,
    PreventabilityComponent,
    IntroComponent,
    CurabilityComponent,
    SurveyCardComponent,
    ConditionTableComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatStepperModule,
        FlexLayoutModule,
        MatRadioModule,
        FormsModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        MatDividerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
