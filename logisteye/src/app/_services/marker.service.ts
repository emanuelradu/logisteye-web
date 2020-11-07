import { PopUpService } from './popup.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {


  capitals: string = 'assets/data/paris_heatmap.geojson';
  lockers: string = 'assets/data/lockers.json';
  locker: string = 'assets/locker.svg';
  heat: string = 'assets/data/heat.json';
  squares: string = 'assets/data/data1.json';

  constructor(private http: HttpClient,
    private popupService: PopUpService) {
  }

  static ScaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }

  // makeCapitalMarkers(map: L.map): void {
  //   this.http.get(this.capitals).subscribe((res: any) => {
  //     for (const c of res.features) {
  //       const lat = c.geometry.coordinates[0];
  //       const lon = c.geometry.coordinates[1];
  //       const marker = L.marker([lon, lat]).addTo(map);
  //     }
  //   });

    makeCapitalCircleMarkers(map: L.map): void {
      this.http.get(this.capitals).subscribe((res: any) => {

        const maxVal = Math.max(...res.features.map(x => x.properties.population), 0);

        for (const c of res.features) {
          const lat = c.geometry.coordinates[1];
          const lon = c.geometry.coordinates[0];
          const circle = L.circleMarker([lon, lat],
            {
              radius: 5,
              color: '#FF0000'
            }
        ).addTo(map);
        circle.bindPopup(this.popupService.makeCapitalPopup(c));

        circle.addTo(map);
        }
        });
    }

      makeLockers(map: L.map): void {
        this.http.get(this.lockers).subscribe((res: any) => {
          for (const c of res) {
            const lat = c.lat;
            const lon = c.long;
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
          L.polygon(latlngs, {color: c.color}).addTo(map);
          }
        });
    }
  }
