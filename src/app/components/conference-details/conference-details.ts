import { Component, Input, signal } from '@angular/core';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-details',
  imports: [],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css',
})
export class ConferenceDetails {
 // PROSIT 2 : données sous forme de Signals.
titre = signal('Découvrir Angular 21');
intervenant = signal('Ahmed Ben Salah');
dateEvenement = signal('20 septembre 2026');
placesDisponibles = signal(3);
message = signal('');
// Informations supplémentaires utilisées quand une conférence est sélectionnée.
description = signal('');
lieu = signal('');
estSelectionnee = signal(false);
conferencee: Conference | null = null;
//@Input() conference: Conference | null = null;
changerTitre(event: Event) {}
inscrire(){}
@Input()
set conference(value: Conference | null) {
if (value) {
this.titre.set(value.title);
this.dateEvenement.set(value.date);
this.placesDisponibles.set(value.maxParticipants - value.nbParticipants);
this.description.set(value.description);
this.lieu.set(value.place);
this.estSelectionnee.set(true);
this.message.set('');
}
}
}
