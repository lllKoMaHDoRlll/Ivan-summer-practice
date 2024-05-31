import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { PlacePageComponent } from './place-page/place-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';

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
  },
  {
    path: 'place',
    component: PlacePageComponent,
    title: 'Place'
  },
  {
    path: 'article',
    component: ArticlePageComponent,
    title: 'Article'
  }
];
