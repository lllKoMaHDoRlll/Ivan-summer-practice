import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { BestOptionsComponent } from '../best-options/best-options.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [
    HeroComponent,
    CatalogComponent,
    BestOptionsComponent,
    FooterComponent
  ],
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css'
})
export class CatalogPageComponent {
  constructor(private router: Router) {}

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
