import { SimulationParams } from './../models/simulation-params';
import { SimulationResult } from './../models/simulation-result';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {SimulationService} from "../../_services/simulation.service";
import { MapComponent } from '../map/map.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})

export class SimulationComponent implements OnInit {
  public co2: string = '';
  public time: number = 0;
  @ViewChild(MapComponent) private map: MapComponent;

  loader = false;
  checked = false;
  simParams: SimulationParams = {
    lockers: null,
    couriers: null,
    packages: null,
  };
  simResult: SimulationResult = {
    time: null,
    co2: null,
  }
  constructor(private simulationService: SimulationService) { }
  
  
  ngOnInit(): void {
  }    

  public setNumberOfLockers(event){
    this.simParams.lockers = event.value;
    console.log(this.simParams);
  }
  public setNumberOfPackages(event){
    this.simParams.packages = event.value;
    console.log(this.simParams);
  }
  public setNumberOfCouriers(event){
    this.simParams.couriers = event.value;
    console.log(this.simParams);
  }

  public sendSimulationRequest(event){
    console.log(this.simParams)
    this.loader = true;
    this.simulationService.loadSimulationData(this.simParams).subscribe(r => {
      this.co2 = (Math.round(r.co2 * 100) / 100).toFixed(2);
      this.time = r.time;
      this.loader = false;
    });
  }

  public reloadMap(){
    this.map.reInitialize();
  }
}
