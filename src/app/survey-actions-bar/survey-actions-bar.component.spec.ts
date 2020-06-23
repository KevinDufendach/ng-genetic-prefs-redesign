import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyActionsBarComponent } from './survey-actions-bar.component';

describe('SurveyActionsBarComponent', () => {
  let component: SurveyActionsBarComponent;
  let fixture: ComponentFixture<SurveyActionsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyActionsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyActionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
