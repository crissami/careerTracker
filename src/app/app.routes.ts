import { Routes } from '@angular/router';
import { ApplicationsPage } from './features/applications/applications-page/applications-page';

export const routes: Routes = [
  { path: 'applications', component: ApplicationsPage },
  { path: '', redirectTo: 'applications', pathMatch: 'full' },
];
