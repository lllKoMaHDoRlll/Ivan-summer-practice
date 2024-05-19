import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { ReviewCardData } from '../review-card-data';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    CommonModule,
    ReviewCardComponent
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  review_cards_data: ReviewCardData[] = [
    {
      place_name: "Отель «Оранжевое солнце»",
      rating: 4.5,
      review_text: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. ",
      author_name: "Виктор",
      author_city: "Туапсе"
    },
    {
      place_name: "Гостевой дом «Фламинго»",
      rating: 4.5,
      review_text: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. ",
      author_name: "Ирина",
      author_city: "Москва"
    },
    {
      place_name: "Гостевой дом «Как Дома»",
      rating: 5,
      review_text: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. ",
      author_name: "Анастасия",
      author_city: "Нижний Новгород"
    }
  ];
}
