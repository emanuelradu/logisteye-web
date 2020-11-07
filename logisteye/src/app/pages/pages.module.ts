import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PackageListComponent } from './package-list/package-list.component';
import { ConfigurationComponent } from './configuration/configuration.component';



@NgModule({
  declarations: [LoginComponent, PackageListComponent, ConfigurationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    ConfigurationComponent
  ]
})
export class PagesModule { }
