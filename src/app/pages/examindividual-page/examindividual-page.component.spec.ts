import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamindividualPageComponent } from './examindividual-page.component';

describe('ExamindividualPageComponent', () => {
  let component: ExamindividualPageComponent;
  let fixture: ComponentFixture<ExamindividualPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamindividualPageComponent]
    });
    fixture = TestBed.createComponent(ExamindividualPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
