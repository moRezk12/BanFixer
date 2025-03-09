import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FristonesPageComponent } from './fristones-page.component';

describe('FristonesPageComponent', () => {
  let component: FristonesPageComponent;
  let fixture: ComponentFixture<FristonesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FristonesPageComponent]
    });
    fixture = TestBed.createComponent(FristonesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
