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
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
