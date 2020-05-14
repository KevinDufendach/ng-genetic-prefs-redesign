import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreatabilityComponent } from './treatability.component';

describe('TreatabilityComponent', () => {
  let component: TreatabilityComponent;
  let fixture: ComponentFixture<TreatabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
