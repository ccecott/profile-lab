import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile: UserProfile = {
    name: "Cassie",
    contact: "myemail@email.com",
    bio: "Hello",
  }

  constructor() { }
  getUserProfile(): UserProfile {
    return this.profile
  }
  setUserProfile(profile: UserProfile) {
    // this profileservices profile. this refers to whichever class instance youre in
    this.profile = profile
  }

}
