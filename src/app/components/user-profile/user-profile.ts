import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
//variable classique
name : string = 'Ahmed';
//
email = signal('ahmed@gmail.com');
}
