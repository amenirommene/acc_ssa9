import { Component, inject, signal } from '@angular/core';
import { Conference } from '../../models/conference';
import { UpperCasePipe , DatePipe, CommonModule} from '@angular/common';
import { ConferenceDetails } from '../conference-details/conference-details';
import { ConferenceService } from '../../services/conference-service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-conference-list',
   //imports array of the component: Pipes, Directives, Components, Modules
  imports: [UpperCasePipe, DatePipe, CommonModule, ConferenceDetails, RouterLink],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  conferenceSelectionnee: Conference | null = null;
  reserve(conference:Conference){}
  choisirConference(c: Conference){
    this.conferenceSelectionnee = c;

  }
//Les propriétés du composant
 today = new Date().toISOString().split('T')[0];
 confService=inject(ConferenceService);
conferences = signal<Conference[]> 
(this.confService.getAllConferences().filter(c => c.date >= this.today));
couleurBouton(conference: Conference) {
    if (conference.maxParticipants - conference.nbParticipants > 20) {
      return 'vert';
    } else if (conference.maxParticipants - conference.nbParticipants < 5) {
      return 'rouge';
    } else {    
      return 'orange';
    }
  }
 

  
}
