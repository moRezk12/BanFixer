import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpostPageComponent } from './addpost-page.component';

describe('AddpostPageComponent', () => {
  let component: AddpostPageComponent;
  let fixture: ComponentFixture<AddpostPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpostPageComponent]
    });
    fixture = TestBed.createComponent(AddpostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
