import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacthomeComponent } from './contacthome.component';

describe('ContacthomeComponent', () => {
  let component: ContacthomeComponent;
  let fixture: ComponentFixture<ContacthomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContacthomeComponent]
    });
    fixture = TestBed.createComponent(ContacthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
