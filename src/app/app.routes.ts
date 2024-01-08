import { Routes } from '@angular/router';

import {
  HomeComponent,
  RedirectToRailsComponent,
  SecondPageComponent,
} from './components';

export const routes: Routes = [
  { path: 'page2', component: SecondPageComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', pathMatch: 'full', component: RedirectToRailsComponent },
];
