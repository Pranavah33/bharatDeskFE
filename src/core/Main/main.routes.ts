import { Routes } from '@angular/router';
import { MainComponent } from './main-component';
import { DashboardComponent } from './Component/dashboard-component/dashboard-component';
import { ApplicationListComponent } from './Component/application-list/application-list';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'application-list', component: ApplicationListComponent },
    ],
  },
];
