import { Component, Input } from '@angular/core';
import { PlaceCardComponent } from '../place-card/place-card.component';
import { PlaceCardData } from '../place-card-data';
import { CommonModule } from '@angular/common';
import { LiteralArray } from '@angular/compiler';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    CommonModule,
    PlaceCardComponent
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  @Input() catalogTitle: string = "Мы рекомендуем";
  @Input() catalogSubTitle: string = "Что мы рекомендуем в этом сезоне. Успейте забронировать.";
  @Input() filterPosition: "left" | "right" = "right";

  place_cards_data: PlaceCardData[] = [
    {
      image_filename: "kislovodsk.png",
      place_name: "отель «солнечный»",
      address: "г. Пятигорск, ул. Горького, 115",
      treatment_profiles: [
        "Сердечно-сосудистая система",
        "Желудочно-кишечный тракт (ЖКТ)",
        "Обмен веществ",
        "Гинекология",
        "Кровообращение",
        "Заболевания печени",
        "Детокс",
        "Похудение"
      ],
      min_price: 9500
    },
    {
      image_filename: "pyatigorsk.png",
      place_name: "база отдыха «база»",
      address: "г. Пятигорск, ул. Горького, 115",
      treatment_profiles: [
        "Сердечно-сосудистая система",
        "Желудочно-кишечный тракт (ЖКТ)",
        "Обмен веществ",
        "Гинекология",
        "Кровообращение",
        "Заболевания печени",
        "Детокс",
        "Похудение"
      ],
      min_price: 9500
    },
    {
      image_filename: "jeleznovodsk.png",
      place_name: "санаторий «Resort»",
      address: "г. Пятигорск, ул. Горького, 115",
      treatment_profiles: [
        "Сердечно-сосудистая система",
        "Желудочно-кишечный тракт (ЖКТ)",
        "Обмен веществ",
        "Гинекология",
        "Кровообращение",
        "Заболевания печени",
        "Детокс",
        "Похудение"
      ],
      min_price: 9500
    },
    {
      image_filename: "essentuki.png",
      place_name: "отель «солнечный»",
      address: "г. Пятигорск, ул. Горького, 115",
      treatment_profiles: [
        "Сердечно-сосудистая система",
        "Желудочно-кишечный тракт (ЖКТ)",
        "Обмен веществ",
        "Гинекология",
        "Кровообращение",
        "Заболевания печени",
        "Детокс",
        "Похудение"
      ],
      min_price: 9500
    },
    {
      image_filename: "kislovodsk.png",
      place_name: "база отдыха «база»",
      address: "г. Пятигорск, ул. Горького, 115",
      treatment_profiles: [
        "Сердечно-сосудистая система",
        "Желудочно-кишечный тракт (ЖКТ)",
        "Обмен веществ",
        "Гинекология",
        "Кровообращение",
        "Заболевания печени",
        "Детокс",
        "Похудение"
      ],
      min_price: 9500
    },
    {
      image_filename: "pyatigorsk.png",
      place_name: "санаторий «Resort»",
      address: "г. Пятигорск, ул. Горького, 115",
      treatment_profiles: [
        "Сердечно-сосудистая система",
        "Желудочно-кишечный тракт (ЖКТ)",
        "Обмен веществ",
        "Гинекология",
        "Кровообращение",
        "Заболевания печени",
        "Детокс",
        "Похудение"
      ],
      min_price: 9500
    }
  ];
}
