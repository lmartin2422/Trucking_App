import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoadboardComponent } from './pages/loadboard/loadboard.component';
import { RateCalculatorComponent } from './pages/rate-calculator/rate-calculator.component';
import { CarrierManagementComponent } from './pages/carrier-management/carrier-management.component';
import { BlastCarriersComponent } from './components/blast-carriers/blast-carriers.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DateDropdownComponent } from './components/date-dropdown/date-dropdown.component';
import { LocationDialogComponent } from './components/location-dialog/location-dialog.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoadboardComponent,
    RateCalculatorComponent,
    CarrierManagementComponent,
    BlastCarriersComponent,
    DataTableComponent,
    DateDropdownComponent,
    LocationDialogComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
