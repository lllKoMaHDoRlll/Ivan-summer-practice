import { Component } from '@angular/core';
import { OptionData } from '../option-data';
import { OptionComponent } from '../option/option.component';
import { CommonModule } from '@angular/common';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';

@Component({
  selector: 'app-best-options',
  standalone: true,
  imports: [
    OptionComponent,
    CommonModule,
    FeedbackFormComponent
  ],
  templateUrl: './best-options.component.html',
  styleUrl: './best-options.component.css'
})
export class BestOptionsComponent {
  options_data: OptionData[] = [
    {
      name: "отель «солнечный»",
      image_file_name: "kislovodsk.png",
      suggestion_type: 1
    },
    {
      name: "база отдыха «база»",
      image_file_name: "pyatigorsk.png",
      suggestion_type: 2
    },
    {
      name: "санаторий «Resort»",
      image_file_name: "essentuki.png",
      suggestion_type: 1
    },
    {
      name: "отель «родник»",
      image_file_name: "kislovodsk.png",
      suggestion_type: 2
    },
    {
      name: "санаторий «горный»",
      image_file_name: "pyatigorsk.png",
      suggestion_type: 1
    },
    {
      name: "база отдыха «SUNSET»",
      image_file_name: "essentuki.png",
      suggestion_type: 2
    }
  ];
}
