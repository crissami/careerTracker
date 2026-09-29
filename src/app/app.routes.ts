import { Routes } from '@angular/router';
import { ApplicationsPage } from './features/applications/applications-page/applications-page';
import { NewApplicationPage } from './features/applications/new-application-page/new-application-page';

export const routes: Routes = [
  { path: 'applications', component: ApplicationsPage },
  { path: '', redirectTo: 'applications', pathMatch: 'full' },
  { path: 'new', component: NewApplicationPage },
];
