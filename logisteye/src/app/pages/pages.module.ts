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



@NgModule({
  declarations: [LoginComponent, PackageListComponent, SimulationComponent, MapComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MatSliderModule,
    BrowserAnimationsModule,
  ],
  exports: [
    LoginComponent,
    SimulationComponent,
    MapComponent,
    ConfigurationComponent,
  ]
})
export class PagesModule { }
