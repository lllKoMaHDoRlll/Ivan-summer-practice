import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CityOffersCardComponent } from '../city-offers-card/city-offers-card.component';
import { CityOffersData } from '../city-offers-data';
import { CommonModule } from '@angular/common';
import { CompanyAdvantagesComponent } from '../company-advantages/company-advantages.component';
import { BestOptionsComponent } from '../best-options/best-options.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { NewsComponent } from '../news/news.component';
import { FooterComponent } from '../footer/footer.component';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    CityOffersCardComponent,
    CommonModule,
    CompanyAdvantagesComponent,
    BestOptionsComponent,
    ReviewsComponent,
    CatalogComponent,
    NewsComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor(private router: Router) {}

  cities_offers_data: CityOffersData[] = [
    {
      city_name: "кисловодск",
      offers_amount: 1245,
      min_offer_price: 2342,
      city_photo_name: "kislovodsk.png"
    },
    {
      city_name: "пятигорск",
      offers_amount: 915,
      min_offer_price: 4412,
      city_photo_name: "pyatigorsk.png"
    },
    {
      city_name: "ессентуки",
      offers_amount: 1020,
      min_offer_price: 2990,
      city_photo_name: "essentuki.png"
    },
    {
      city_name: "железноводск",
      offers_amount: 945,
      min_offer_price: 2100,
      city_photo_name: "jeleznovodsk.png"
    }
  ];

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
