import { MapComponent } from './map/map.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackageListComponent } from './pages/package-list/package-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'map', component: MapComponent },
  { path: 'package-list', component: PackageListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
