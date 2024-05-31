import { Component, Input } from '@angular/core';
import { NewsCardData } from '../news-card-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-catalog-card',
  standalone: true,
  imports: [],
  templateUrl: './news-catalog-card.component.html',
  styleUrl: './news-catalog-card.component.css'
})
export class NewsCatalogCardComponent {
  constructor(private router: Router) {}

  image_base_filepath = "assets/images/cities/";
  @Input() news_card_data!: NewsCardData;

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
