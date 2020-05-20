import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: UserProfile;
  // service is an instace of a class which means it is an OBJECT which has methods 
  // the two methods are get and set intialized on the profile.service.ts
  constructor(private profileService: ProfileService) { }

  // we are getting freshly updated information on init
  ngOnInit(): void {
    this.profile = this.profileService.getUserProfile()
  }

}
