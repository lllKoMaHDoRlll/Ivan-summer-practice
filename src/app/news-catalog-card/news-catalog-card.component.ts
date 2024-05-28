import { Component, Input } from '@angular/core';
import { NewsCardData } from '../news-card-data';

@Component({
  selector: 'app-news-catalog-card',
  standalone: true,
  imports: [],
  templateUrl: './news-catalog-card.component.html',
  styleUrl: './news-catalog-card.component.css'
})
export class NewsCatalogCardComponent {
  image_base_filepath = "assets/images/cities/";
  @Input() news_card_data!: NewsCardData;
}
