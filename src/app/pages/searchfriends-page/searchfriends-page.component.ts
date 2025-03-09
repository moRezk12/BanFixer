import { Component } from '@angular/core';

@Component({
  selector: 'app-searchfriends-page',
  templateUrl: './searchfriends-page.component.html',
  styleUrls: ['./searchfriends-page.component.css']
})
export class SearchfriendsPageComponent {

  searchinput : boolean = false ;

  showSearchInput(){
    this.searchinput = !this.searchinput
  }

}
