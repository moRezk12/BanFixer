import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServieshomeComponent } from './servieshome.component';

describe('ServieshomeComponent', () => {
  let component: ServieshomeComponent;
  let fixture: ComponentFixture<ServieshomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServieshomeComponent]
    });
    fixture = TestBed.createComponent(ServieshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
