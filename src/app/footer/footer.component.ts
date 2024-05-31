import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {}

  faPhone = faPhone;
  faTelegram = faTelegram;
  faInstagram = faInstagram;

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
