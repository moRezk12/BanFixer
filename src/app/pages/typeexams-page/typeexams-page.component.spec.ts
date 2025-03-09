import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeexamsPageComponent } from './typeexams-page.component';

describe('TypeexamsPageComponent', () => {
  let component: TypeexamsPageComponent;
  let fixture: ComponentFixture<TypeexamsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeexamsPageComponent]
    });
    fixture = TestBed.createComponent(TypeexamsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
