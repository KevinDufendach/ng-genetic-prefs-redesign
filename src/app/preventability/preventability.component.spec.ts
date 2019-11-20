import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventabilityComponent } from './preventability.component';

describe('PreventabilityComponent', () => {
  let component: PreventabilityComponent;
  let fixture: ComponentFixture<PreventabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
