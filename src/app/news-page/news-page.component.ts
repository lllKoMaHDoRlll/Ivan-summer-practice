import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { NewsCatalogComponent } from '../news-catalog/news-catalog.component';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
