import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierStatusComponent } from './carrier-status.component';

describe('CarrierStatusComponent', () => {
  let component: CarrierStatusComponent;
  let fixture: ComponentFixture<CarrierStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
