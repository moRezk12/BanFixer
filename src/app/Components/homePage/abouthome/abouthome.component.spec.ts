import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouthomeComponent } from './abouthome.component';

describe('AbouthomeComponent', () => {
  let component: AbouthomeComponent;
  let fixture: ComponentFixture<AbouthomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbouthomeComponent]
    });
    fixture = TestBed.createComponent(AbouthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
