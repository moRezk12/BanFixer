import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './layouts/user/navbar/navbar.component';
import { UserLayoutComponent } from './layouts/user/user-layout/user-layout.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { ForgetPasswordComponent } from './Components/Auth/forget-password/forget-password.component';
import { HeroComponent } from './Components/homePage/hero/hero.component';
import { ServieshomeComponent } from './Components/homePage/servieshome/servieshome.component';
import { AbouthomeComponent } from './Components/homePage/abouthome/abouthome.component';
import { ContacthomeComponent } from './Components/homePage/contacthome/contacthome.component';
import { ManagehomeComponent } from './Components/homePage/managehome/managehome.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
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

// Translate function
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ServicePageComponent,
    HomePageComponent,
    NavbarComponent,
    UserLayoutComponent,
    FooterComponent,
    AboutPageComponent,
    ContactPageComponent,
    ManagementPageComponent,
    ForgetPasswordComponent,
    HeroComponent,
    ServieshomeComponent,
    AbouthomeComponent,
    ContacthomeComponent,
    ManagehomeComponent,
    AskmePageComponent,
    RoomsPageComponent,
    FreindsPageComponent,
    ChatPageComponent,
    PostsPageComponent,
    CommentsPageComponent,
    ProfilePageComponent,
    AddpostPageComponent,
    TypeexamsPageComponent,
    ExamindividualPageComponent,
    ChosematerialPageComponent,
    MyfriendsPageComponent,
    FristonesPageComponent,
    SearchfriendsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
