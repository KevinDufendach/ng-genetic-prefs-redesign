import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleStepIndicatorComponent } from './circle-step-indicator.component';

describe('CircleStepIndicatorComponent', () => {
  let component: CircleStepIndicatorComponent;
  let fixture: ComponentFixture<CircleStepIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleStepIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleStepIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
