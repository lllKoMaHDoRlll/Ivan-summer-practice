import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../news-card/news-card.component';
import { NewsCardData } from '../news-card-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    CommonModule,
    NewsCardComponent
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})

export class NewsComponent {
  constructor(private router: Router) {}

  news_cards_data: NewsCardData[] = [
    {
      title: 'Важное в туризме за неделю: перспективы "безвиза", новые рейсы и рост цен',
      date: "12.04.23",
      text: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. "
    },
    {
      title: 'Названы города России, куда туристы едут встречать астрономическую осень',
      date: "24.04.23",
      text: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. "
    },
    {
      title: 'Эксперты выяснили, какие фильмы россияне смотрят в дороге и на отдыхе',
      date: "25.09.23",
      text: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. "
    },
  ];

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
