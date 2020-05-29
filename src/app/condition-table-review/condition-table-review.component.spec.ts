import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionTableReviewComponent } from './condition-table-review.component';

describe('ConditionTableReviewComponent', () => {
  let component: ConditionTableReviewComponent;
  let fixture: ComponentFixture<ConditionTableReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionTableReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionTableReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
