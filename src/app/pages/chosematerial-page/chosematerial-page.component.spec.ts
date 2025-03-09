import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosematerialPageComponent } from './chosematerial-page.component';

describe('ChosematerialPageComponent', () => {
  let component: ChosematerialPageComponent;
  let fixture: ComponentFixture<ChosematerialPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChosematerialPageComponent]
    });
    fixture = TestBed.createComponent(ChosematerialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
