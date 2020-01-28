import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SurveyComponent} from './survey/survey.component';
import {
    MatButtonModule,
    MatCardModule, MatDividerModule, MatExpansionModule,
    MatIconModule,
    MatRadioModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';

import {InstructionsComponent} from './instructions/instructions.component';
import {PreventabilityComponent} from './preventability/preventability.component';
import {IntroComponent} from './intro/intro.component';
import { CurabilityComponent } from './curability/curability.component';
import { SurveyCardComponent } from './survey-card/survey-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    SurveyComponent,
    PreventabilityComponent,
    IntroComponent,
    CurabilityComponent,
    SurveyCardComponent,
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
