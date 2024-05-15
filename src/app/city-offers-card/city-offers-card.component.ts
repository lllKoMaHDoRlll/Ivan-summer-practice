import { Component, Input } from '@angular/core';
import { CityOffersData } from '../city-offers-data';

@Component({
  selector: 'app-city-offers-card',
  standalone: true,
  imports: [],
  templateUrl: './city-offers-card.component.html',
  styleUrl: './city-offers-card.component.css'
})

export class CityOffersCardComponent {
  @Input() city_offers_data!: CityOffersData;
  image_base_filepath = "/assets/images/cities/";
}
