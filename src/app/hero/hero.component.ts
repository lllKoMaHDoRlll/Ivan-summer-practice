import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { BookingSearchComponent } from '../booking-search/booking-search.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    BookingSearchComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() doShowTitle: boolean = true;
}
