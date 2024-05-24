import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { NewsPageComponent } from './news-page/news-page.component';

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
  },
  {
    path: 'news',
    component: NewsPageComponent,
    title: 'News Page'
  }
];
