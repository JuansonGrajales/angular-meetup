import { Component } from '@angular/core';
import { UserProfile } from './models/user-profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lifecycle';

  currentName: string = '';

  handleProfileSubmission(profile: UserProfile) {
    console.log('Profile received: ', profile);
    // add it to the user data service
  }
}
