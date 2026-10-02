import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { ResourcesPageComponent } from './resources-page.component';
import { NewsPageComponent } from './news-page.component';
import { ProjectPageComponent } from './project-page.component';

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'ressources', component: ResourcesPageComponent },
  { path: 'ressources/:id', component: ResourcesPageComponent },
  { path: 'actualites', component: NewsPageComponent },
  { path: 'actualites/evenements/:id', component: NewsPageComponent },
  { path: 'actualites/:id', component: NewsPageComponent },
  { path: 'projet', component: ProjectPageComponent },
  { path: 'projet/phase-1', component: ProjectPageComponent },
  { path: '**', redirectTo: '' }
];
