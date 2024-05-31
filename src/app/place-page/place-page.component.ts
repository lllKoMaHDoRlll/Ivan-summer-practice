import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { PlacePageCardComponent } from '../place-page-card/place-page-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-page',
  standalone: true,
  imports: [
    HeroComponent,
    FooterComponent,
    PlacePageCardComponent
  ],
  templateUrl: './place-page.component.html',
  styleUrl: './place-page.component.css'
})
export class PlacePageComponent {
  constructor(private router: Router) {}

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
