import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-booking-search',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './booking-search.component.html',
  styleUrl: './booking-search.component.css'
})
export class BookingSearchComponent {
  faLocationDot = faLocationDot;
  faCalendarDays = faCalendarDays;
  faUser = faUser;
}
