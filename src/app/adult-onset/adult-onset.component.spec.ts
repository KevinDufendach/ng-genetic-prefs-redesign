import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultOnsetComponent } from './adult-onset.component';

describe('AdultOnsetComponent', () => {
  let component: AdultOnsetComponent;
  let fixture: ComponentFixture<AdultOnsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultOnsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultOnsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
