import { Routes } from '@angular/router';
import { VerifySuccessComponent } from './verify-success/verify-success.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: 'verify-success', component: VerifySuccessComponent },
  { path: '', component: LandingPageComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
