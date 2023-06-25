import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSuggestionComponent } from './review-suggestion.component';

describe('ReviewSuggestionComponent', () => {
  let component: ReviewSuggestionComponent;
  let fixture: ComponentFixture<ReviewSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
