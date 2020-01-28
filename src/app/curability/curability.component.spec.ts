import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurabilityComponent } from './curability.component';

describe('CurabilityComponent', () => {
  let component: CurabilityComponent;
  let fixture: ComponentFixture<CurabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
