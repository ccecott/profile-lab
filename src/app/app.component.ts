import { Component } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile-lab';

  profile: UserProfile;
}
