import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserLayoutComponent } from './layouts/user/user-layout/user-layout.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { ForgetPasswordComponent } from './Components/Auth/forget-password/forget-password.component';
import { AskmePageComponent } from './pages/askme-page/askme-page.component';
import { RoomsPageComponent } from './pages/rooms-page/rooms-page.component';
import { FreindsPageComponent } from './pages/freinds-page/freinds-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { CommentsPageComponent } from './pages/comments-page/comments-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AddpostPageComponent } from './pages/addpost-page/addpost-page.component';
import { TypeexamsPageComponent } from './pages/typeexams-page/typeexams-page.component';
import { ExamindividualPageComponent } from './pages/examindividual-page/examindividual-page.component';
import { ChosematerialPageComponent } from './pages/chosematerial-page/chosematerial-page.component';
import { MyfriendsPageComponent } from './pages/myfriends-page/myfriends-page.component';
import { FristonesPageComponent } from './pages/fristones-page/fristones-page.component';
import { SearchfriendsPageComponent } from './pages/searchfriends-page/searchfriends-page.component';

const routes: Routes = [

  { path : '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },


  {
    path : '',
    component : UserLayoutComponent,
    children : [
      { path : '', component : HomePageComponent},
      { path : 'home', component: HomePageComponent },
      { path : 'service', component: ServicePageComponent },
      { path : 'about', component: AboutPageComponent  },
      { path : 'contact', component: ContactPageComponent },
      { path : 'management', component: ManagementPageComponent },
      { path : 'askme', component: AskmePageComponent },
      { path : 'rooms', component: RoomsPageComponent },
      { path : 'friends', component: FreindsPageComponent },
      { path : 'chat', component: ChatPageComponent },
      { path : 'posts', component: PostsPageComponent },
      { path : 'comments', component: CommentsPageComponent },
      { path : 'profile', component: ProfilePageComponent },
      { path : 'addpost', component: AddpostPageComponent },
      { path : 'typeexams', component: TypeexamsPageComponent },
      { path : 'examindividual', component: ExamindividualPageComponent },
      { path : 'chosematerial', component: ChosematerialPageComponent },
      { path : 'myfriends', component: MyfriendsPageComponent },
      { path : 'fristones', component: FristonesPageComponent },
      { path : 'searchfriends', component: SearchfriendsPageComponent },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
