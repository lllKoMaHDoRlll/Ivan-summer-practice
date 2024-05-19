import { Component, Input } from '@angular/core';
import { NewsCardData } from '../news-card-data';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent {
  @Input() news_card_data!: NewsCardData;
}
