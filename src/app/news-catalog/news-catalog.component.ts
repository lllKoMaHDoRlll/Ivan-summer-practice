import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCatalogCardComponent } from '../news-catalog-card/news-catalog-card.component';
import { NewsCardData } from '../news-card-data';

@Component({
  selector: 'app-news-catalog',
  standalone: true,
  imports: [
    CommonModule,
    NewsCatalogCardComponent
  ],
  templateUrl: './news-catalog.component.html',
  styleUrl: './news-catalog.component.css'
})
export class NewsCatalogComponent {
  news_cards_data: NewsCardData[] = [
    {
      title: 'Важное в туризме за неделю: перспективы "безвиза", новые рейсы и рост цен',
      date: '12.04.23',
      text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.',
      image_filename: 'mountain.png'
    },
    {
      title: 'Важное в туризме за неделю: перспективы "безвиза", новые рейсы и рост цен',
      date: '12.04.23',
      text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.',
      image_filename: 'fountain.png'
    },
    {
      title: 'Важное в туризме за неделю: перспективы "безвиза", новые рейсы и рост цен',
      date: '12.04.23',
      text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.',
      image_filename: 'stairs.png'
    },
    {
      title: 'Важное в туризме за неделю: перспективы "безвиза", новые рейсы и рост цен',
      date: '12.04.23',
      text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.',
      image_filename: 'fountain_2.png'
    },
    {
      title: 'Важное в туризме за неделю: перспективы "безвиза", новые рейсы и рост цен',
      date: '12.04.23',
      text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.',
      image_filename: 'mountain_2.png'
    }
  ];
}
