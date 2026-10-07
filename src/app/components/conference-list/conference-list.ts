import { Component, signal } from '@angular/core';
import { Conference } from '../../models/conference';
import { UpperCasePipe , DatePipe, CommonModule} from '@angular/common';
import { ConferenceDetails } from '../conference-details/conference-details';
@Component({
  selector: 'app-conference-list',
   //imports array of the component: Pipes, Directives, Components, Modules
  imports: [UpperCasePipe, DatePipe, CommonModule,ConferenceDetails  ],
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
 conferences = signal<Conference[]> ([
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Découvrir les nouveautés d’Angular 21.',
      date: '2026-10-15',
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 25
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur les Signals Angular.',
      date: '2026-10-30',
      place: 'Ariana',
      maxParticipants: 20,
      nbParticipants: 14
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Conférence sur le développement web moderne.',
      date: '2026-11-20',
      place: 'Sousse',
      maxParticipants: 30,
      nbParticipants: 30
    },  
    {id: 4,
      title: 'Ancienne Conference',
      description: 'Cette conférence est ancienne et ne doit pas être affichée.',
      date: '2026-08-15',
      place: 'Tunis',
      maxParticipants: 40,
      nbParticipants: 20
    }
  ]);

couleurBouton(conference: Conference) {
    if (conference.maxParticipants - conference.nbParticipants > 20) {
      return 'vertt';
    } else if (conference.maxParticipants - conference.nbParticipants < 5) {
      return 'rougee';
    } else {    
      return 'orangee';
    }
  }
 

  
}
