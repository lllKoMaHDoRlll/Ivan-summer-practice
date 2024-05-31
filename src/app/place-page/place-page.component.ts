import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { PlacePageCardComponent } from '../place-page-card/place-page-card.component';

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

}
