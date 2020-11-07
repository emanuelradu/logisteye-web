import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PackageListComponent } from './package-list/package-list.component';



@NgModule({
  declarations: [LoginComponent, PackageListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
  ]
})
export class PagesModule { }
