import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  show = signal(false);
  showNotifications(){
    this.show.set(!this.show());
    console.log(this.show());
  }
}
