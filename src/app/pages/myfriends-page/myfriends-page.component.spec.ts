import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfriendsPageComponent } from './myfriends-page.component';

describe('MyfriendsPageComponent', () => {
  let component: MyfriendsPageComponent;
  let fixture: ComponentFixture<MyfriendsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyfriendsPageComponent]
    });
    fixture = TestBed.createComponent(MyfriendsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
