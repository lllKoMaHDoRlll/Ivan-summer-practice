import { Component, Input } from '@angular/core';
import { OptionData } from '../option-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})

export class OptionComponent {
  image_base_filepath = "assets/images/cities/";
  @Input() option_data!: OptionData;
}
