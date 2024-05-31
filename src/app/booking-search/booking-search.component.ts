import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router} from '@angular/router';

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
  constructor(private router: Router) {}

  faLocationDot = faLocationDot;
  faCalendarDays = faCalendarDays;
  faUser = faUser;

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
