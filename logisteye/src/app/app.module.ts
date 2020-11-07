import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MarkerService } from './_services/marker.service';
import { HttpClientModule } from '@angular/common/http';
import { PopUpService } from './_services/popup.service';
import {MainModule} from "./main/main.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MainModule,
    AppRoutingModule,
  ],
  providers: [
    MarkerService,
    PopUpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
