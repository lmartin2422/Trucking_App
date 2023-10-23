import { CarrierManagementComponent } from './pages/carrier-management/carrier-management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoadboardComponent } from './pages/loadboard/loadboard.component';

const routes: Routes = [
  { path: '/', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'loadboard', component: LoadboardComponent },
  { path: 'carrier-management', component: CarrierManagementComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
