import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';
import { faStarHalfStroke, faStar, faWifi, faUtensils, faUmbrellaBeach, faPersonSwimming, faSquareParking, faTree } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { ReviewCardData } from '../review-card-data';

@Component({
  selector: 'app-place-page-card',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    FeedbackFormComponent,
    ReviewCardComponent
  ],
  templateUrl: './place-page-card.component.html',
  styleUrl: './place-page-card.component.css'
})
export class PlacePageCardComponent implements OnInit{
  faStarHalfStroke = faStarHalfStroke;
  faStar = faStar;
  faStarRegular = faStarRegular;
  faWifi = faWifi;
  faUtensils = faUtensils;
  faUmbrellaBeach = faUmbrellaBeach;
  faPersonSwimming = faPersonSwimming;
  faSquareParking = faSquareParking;
  faTree = faTree;

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

  tabs = {
    "tabs-title-description" : {
      "title_id": "tabs-title-description",
      "body_id": "tabs-body-description",
      "title_element": document.getElementById("tabs-title-description"),
      "body_element": document.getElementById("tabs-body-description")
    },
    "tabs-title-rooms" : {
      "title_id": "tabs-title-rooms",
      "body_id": "tabs-body-rooms",
      "title_element": document.getElementById("tabs-title-rooms"),
      "body_element": document.getElementById("tabs-body-rooms")
    },
    "tabs-title-reviews" : {
      "title_id": "tabs-title-reviews",
      "body_id": "tabs-body-reviews",
      "title_element": document.getElementById("tabs-title-reviews"),
      "body_element": document.getElementById("tabs-body-reviews")
    }
  };

  active_tab = this.tabs["tabs-title-description"];

  onTabClick(tab: any): void {
    this.active_tab.title_element?.classList.remove("tabs__titles__item--active");
    this.active_tab.body_element?.classList.remove("tabs__bodies__item--active");

    this.active_tab = tab;

    this.active_tab.title_element?.classList.add("tabs__titles__item--active");
    this.active_tab.body_element?.classList.add("tabs__bodies__item--active");
  }

  ngOnInit(): void {
    this.tabs = {
      "tabs-title-description" : {
        "title_id": "tabs-title-description",
        "body_id": "tabs-body-description",
        "title_element": document.getElementById("tabs-title-description"),
        "body_element": document.getElementById("tabs-body-description")
      },
      "tabs-title-rooms" : {
        "title_id": "tabs-title-rooms",
        "body_id": "tabs-body-rooms",
        "title_element": document.getElementById("tabs-title-rooms"),
        "body_element": document.getElementById("tabs-body-rooms")
      },
      "tabs-title-reviews" : {
        "title_id": "tabs-title-reviews",
        "body_id": "tabs-body-reviews",
        "title_element": document.getElementById("tabs-title-reviews"),
        "body_element": document.getElementById("tabs-body-reviews")
      }
    };

    this.active_tab = this.tabs["tabs-title-description"];
  }
}
