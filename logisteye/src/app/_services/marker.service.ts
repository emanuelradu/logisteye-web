import { PopUpService } from './popup.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { SimulationService } from './simulation.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {


  capitals: string = 'assets/data/paris_heatmap.geojson';
  lockers: string = 'assets/data/lockers.json';
  locker: string = 'assets/locker.svg';
  heat: string = 'assets/data/heat.json';
  squares: string = 'assets/data/data1.json';
  bikeData: string = 'assets/data/data_bikes.json';
  packageData: string = 'assets/data/package_data.json';

  constructor(private http: HttpClient,
    private simulationService: SimulationService) {
  }

      makeLockers(map: L.map): void {
        this.simulationService.loadLockers().subscribe((res: any) => {
          for (const locker of res) {
            const lat = locker.location.latitude;
            const lon = locker.location.longitude;
            const addImage = L.imageOverlay(this.locker, [[lat, lon], [lat - 0.001, lon + 0.001]]).addTo(map);
          }
        });
    }

    makeHeatMap(map: L.map): void {
      this.http.get(this.squares).subscribe((res: any) => {
          for (const c of res) {
          const latlngs = [[c.corners[0].lat, c.corners[0].long],
            [c.corners[1].lat, c.corners[1].long],
            [c.corners[2].lat, c.corners[2].long],
            [c.corners[3].lat, c.corners[3].long]];
          L.polygon(latlngs, {color: c.color, weight: 0.1}).addTo(map);
          }
        });
    }

    makeBikeAreas(map: L.map): void {
      this.simulationService.loadBikes().subscribe((res: any) => {
        for (const area of res) {
          const circle = L.circle([area.location_center.latitude, area.location_center.longitude],
            {
              radius: 1000 * area.radius,
              color: 'cyan'
            }
          ).addTo(map);
        }
      });
    }

    makePackages(map: L.map): void {
      this.simulationService.loadPackages().subscribe((res: any) => {
        for (const pack of res) {
          const circle = L.circle([pack.destination_location.latitude, pack.destination_location.longitude], {
            radius: 0.5,
            color: 'brown'
          }).addTo(map);
        }
      });
    }
  }
