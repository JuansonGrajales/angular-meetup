import { Component } from '@angular/core';
import { UserProfile } from './models/user-profile.model';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lifecycle';

  currentName: string = 'This is the parent default value';

  constructor(private userDataService: UserDataService) {}

  handleProfileSubmission(profile: UserProfile) {
    console.log('Profile received: ', profile);
    this.userDataService.userProfiles.push(profile);
    this.currentName = profile.name;
  }
}
