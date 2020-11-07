import { SimulationComponent } from './pages/simulation/simulation.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackageListComponent } from './pages/package-list/package-list.component';
import { MapComponent } from './pages/map/map.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { AuthGuard } from './_helpers/auth.guard';


const routes: Routes = [
  { path: '', component: MapComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'package-list', component: PackageListComponent, canActivate: [AuthGuard] },
  { path: 'simulation', component: SimulationComponent, canActivate: [AuthGuard] },
  { path: 'configuration', component: ConfigurationComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
