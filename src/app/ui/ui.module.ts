import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page/home-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { NotificationMessageComponent } from './notification-message/notification-message.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLoginComponent } from './user-login/user-login.component';



@NgModule({
  declarations: [
    HomePageComponent, 
    MainNavComponent, 
    NotificationMessageComponent, 
    UserFormComponent, 
    UserProfileComponent, 
    UserLoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    MainNavComponent, 
    NotificationMessageComponent, 
    UserFormComponent, 
    UserProfileComponent
  ]
})
export class UiModule { }
