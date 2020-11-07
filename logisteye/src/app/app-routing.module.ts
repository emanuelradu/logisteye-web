import { SimulationComponent } from './pages/simulation/simulation.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackageListComponent } from './pages/package-list/package-list.component';
import { MapComponent } from './pages/map/map.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'map', component: MapComponent },
  { path: 'package-list', component: PackageListComponent },
  { path: 'simulation', component: SimulationComponent },
  { path: 'configuration', component: ConfigurationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
