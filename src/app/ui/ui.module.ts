import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page/home-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { NotificationMessageComponent } from './notification-message/notification-message.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faGithub, faMedium, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUserSecret, faThumbsUp, faHeart } from '@fortawesome/free-solid-svg-icons';


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
    ReactiveFormsModule,
    FontAwesomeModule 

  ],
  exports:[
    MainNavComponent, 
    NotificationMessageComponent, 
    UserFormComponent, 
    UserProfileComponent
  ]
})
export class UiModule { 
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faFacebook, faTwitter, faGithub, faMedium, faGoogle, faUserSecret, faThumbsUp, faHeart);
    //library.add(fas);
  }    
}
