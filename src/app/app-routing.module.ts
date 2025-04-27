// app.routes.ts (nuevo nombre recomendado)
import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { SignInComponent } from './modules/auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './modules/auth/pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './modules/auth/pages/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './modules/auth/pages/new-password/new-password.component';
import { TwoStepsComponent } from './modules/auth/pages/two-steps/two-steps.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { NftComponent } from './modules/dashboard/pages/nft/nft.component';
import { UikitComponent } from './modules/uikit/uikit.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () => import('./modules/layout/layout.component').then((m) => m.LayoutComponent),
  // },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'nfts', pathMatch: 'full' },
      { path: 'nfts', component: NftComponent },
      { path: '**', redirectTo: 'errors/404' },
    ]
  },
 
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: SignInComponent, data: { returnUrl: window.location.pathname } },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'new-password', component: NewPasswordComponent },
      { path: 'two-steps', component: TwoStepsComponent },
      { path: '**', redirectTo: 'sign-in', pathMatch: 'full' },
    ]
  },
  {
    path: 'errors',
    loadComponent: () => import('./modules/error/error.component').then((m) => m.ErrorComponent),
  },
  { path: '**', redirectTo: 'errors/404' },
];
