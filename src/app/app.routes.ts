import { Routes } from '@angular/router';
import { SignupComponent } from '../core/Login/Component/sign-up-component/sign-up-component';
import { LoginComponent } from '../core/Login/Component/login-component/login-component';
import { LoginFormComponent } from '../core/Login/Component/login-form-component/login-form-component';

export const routes: Routes = [
    // Default redirect
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: 'login/:userType', component: LoginFormComponent },
    ],
  },

  // Public routes — noAuthGuard redirects logged-in users to dashboard
  { path: 'register', component: SignupComponent}
];
