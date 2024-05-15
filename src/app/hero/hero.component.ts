import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BookingSearchComponent } from '../booking-search/booking-search.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    HeaderComponent,
    BookingSearchComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
