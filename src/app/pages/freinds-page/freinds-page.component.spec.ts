import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreindsPageComponent } from './freinds-page.component';

describe('FreindsPageComponent', () => {
  let component: FreindsPageComponent;
  let fixture: ComponentFixture<FreindsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreindsPageComponent]
    });
    fixture = TestBed.createComponent(FreindsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
