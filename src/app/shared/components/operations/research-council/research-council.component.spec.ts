import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchCouncilComponent } from './research-council.component';

describe('ResearchCouncilComponent', () => {
  let component: ResearchCouncilComponent;
  let fixture: ComponentFixture<ResearchCouncilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchCouncilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
