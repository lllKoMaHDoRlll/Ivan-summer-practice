import { Component, Input } from '@angular/core';
import { PlaceCardData } from '../place-card-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWifi, faUtensils, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-card',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './place-card.component.html',
  styleUrl: './place-card.component.css'
})
export class PlaceCardComponent {
  constructor(private router: Router) {}

  image_base_filepath = "assets/images/cities/";
  @Input() place_card_data!: PlaceCardData;

  faWifi = faWifi;
  faUtensils = faUtensils;
  faUmbrellaBeach = faUmbrellaBeach;

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
