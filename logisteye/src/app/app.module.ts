import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { MainModule } from './main/main.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { MarkerService } from './_services/marker.service';
import { HttpClientModule } from '@angular/common/http';
import { PopUpService } from './_services/popup.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {SimulationService} from "./_services/simulation.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MainModule,
    PagesModule,
    AppRoutingModule,
    MatSliderModule,
    MatCheckboxModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [
    MarkerService,
    PopUpService,
    SimulationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
