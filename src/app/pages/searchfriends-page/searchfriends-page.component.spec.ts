import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfriendsPageComponent } from './searchfriends-page.component';

describe('SearchfriendsPageComponent', () => {
  let component: SearchfriendsPageComponent;
  let fixture: ComponentFixture<SearchfriendsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchfriendsPageComponent]
    });
    fixture = TestBed.createComponent(SearchfriendsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
