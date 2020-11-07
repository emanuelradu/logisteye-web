import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { MainModule } from './main/main.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { MarkerService } from './_services/marker.service';
import { HttpClientModule } from '@angular/common/http';
import { PopUpService } from './_services/popup.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [
    MarkerService,
    PopUpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
