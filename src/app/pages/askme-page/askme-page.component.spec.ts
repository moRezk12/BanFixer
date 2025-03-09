import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskmePageComponent } from './askme-page.component';

describe('AskmePageComponent', () => {
  let component: AskmePageComponent;
  let fixture: ComponentFixture<AskmePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AskmePageComponent]
    });
    fixture = TestBed.createComponent(AskmePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
