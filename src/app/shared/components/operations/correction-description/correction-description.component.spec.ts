import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionDescriptionComponent } from './correction-description.component';

describe('CorrectionDescriptionComponent', () => {
  let component: CorrectionDescriptionComponent;
  let fixture: ComponentFixture<CorrectionDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
