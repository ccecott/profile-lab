import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../interfaces/user-profile';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  // this holds the old information we set up intially 
  profile: UserProfile;
  constructor(private router: Router, private profileService: ProfileService) { }; //put router shit in here 

  ngOnInit(): void {
    // this sets a the value inside our edit profile to what we already had, we can update from there
    this.profile = this.profileService.getUserProfile();
  }

  // expects parameter of a form, does not return anything
  editProfile(form: NgForm): void {
    // replaces whatever is currently in variable newProfile, these values are coming from the form
    // once the profile is set with the newProfile, we have to replace with this new information with set user profile
    let newProfile: UserProfile = {
      // this variabke is only scoped to editProfile
      name: form.value.name,
      contact: form.value.contact,
      bio: form.value.bio,
    };
    // using the service method to update the object, can not be used in the other component to update the information
    // updates the data to sync up the new information inputted in the form and used in the editProfile method
    // this.profile = newProfile;
    this.profileService.setUserProfile(newProfile);
    this.router.navigate(["profile"]);
  }

}
