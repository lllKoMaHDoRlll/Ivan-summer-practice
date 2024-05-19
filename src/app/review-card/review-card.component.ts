import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCardData } from '../review-card-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStarHalfStroke, faStar, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css'
})
export class ReviewCardComponent {
  @Input() review_card_data!: ReviewCardData;
  faStarHalfStroke = faStarHalfStroke;
  faStar = faStar;
  faStarRegular = faStarRegular;

  public get_stars_icons(rating: number) {
    let rating_icons: IconDefinition[] = [];

    rating -= rating % 0.5;
    rating = Math.min(rating, 5.0);
    rating = Math.max(rating, 0.0);

    for (let i = 0; i < 5; i++) {
      if (rating >= 1) {
        rating--;
        rating_icons.push(this.faStar);
      }
      else if (rating == 0.5) {
        rating_icons.push(this.faStarHalfStroke);
        rating -= 0.5;
      }
      else {
        rating_icons.push(this.faStarRegular);
      }
    }
    return rating_icons;
  }

}
