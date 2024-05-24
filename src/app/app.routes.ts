import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'catalog',
    component: CatalogPageComponent,
    title: 'Catalog Page'
  }
];
