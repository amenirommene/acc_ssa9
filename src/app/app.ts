import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { NavBar } from './components/nav-bar/nav-bar';
import { UserProfile } from './components/user-profile/user-profile';
import { Notifications } from './components/notifications/notifications';
import { FriendsList } from './components/friends-list/friends-list';
import { ConferenceList } from './components/conference-list/conference-list';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Footer, Header, NavBar,ConferenceList, UserProfile, Notifications, FriendsList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bonjour AngularSSA9');
  name:string = "Ahmed";
  f(){
    alert ("bonjour");
  }
}
