import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { NewsCatalogComponent } from '../news-catalog/news-catalog.component';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [
    HeroComponent,
    FooterComponent,
    NewsCatalogComponent
  ],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent {

}
