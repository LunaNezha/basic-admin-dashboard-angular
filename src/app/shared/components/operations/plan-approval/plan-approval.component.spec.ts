import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanApprovalComponent } from './plan-approval.component';

describe('PlanApprovalComponent', () => {
  let component: PlanApprovalComponent;
  let fixture: ComponentFixture<PlanApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
