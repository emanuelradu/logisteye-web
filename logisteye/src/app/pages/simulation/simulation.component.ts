import { SimulationParams } from './../models/simulation-params';
import { SimulationResult } from './../models/simulation-result';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})

export class SimulationComponent implements OnInit {
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
  constructor() { }
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
    console.log(this.simResult);
  }



}
