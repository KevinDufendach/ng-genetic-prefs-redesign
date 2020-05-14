import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptOutComponent } from './opt-out.component';

describe('OptOutComponent', () => {
  let component: OptOutComponent;
  let fixture: ComponentFixture<OptOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
