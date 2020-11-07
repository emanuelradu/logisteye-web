import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PackageListComponent } from './package-list/package-list.component';
import { SimulationComponent } from './simulation/simulation.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [LoginComponent, PackageListComponent, SimulationComponent, MapComponent,ConfigurationComponent, DataTableComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MatSliderModule,
    MatCheckboxModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
  ],
  exports: [
    LoginComponent,
    SimulationComponent,
    MapComponent,
    ConfigurationComponent,
    DataTableComponent,
  ]
})
export class PagesModule { }
