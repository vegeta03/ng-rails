import { Routes } from '@angular/router';

import {
  Page1Component,
  Page2Component,
  Page4Component,
  RedirectToRailsComponent,
} from './components';

export const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page4', component: Page4Component },
  { path: '', pathMatch: 'full', component: RedirectToRailsComponent },
  { path: '**', pathMatch: 'full', component: RedirectToRailsComponent },
];
