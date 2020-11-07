import { PopUpService } from './popup.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  capitals: string = 'assets/data/paris_heatmap.geojson';
  

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
          console.log(lat)
          const circle = L.circleMarker([lon, lat],
            {
              radius: 10,
              color: '#FF0000'
            }
        ).addTo(map);
      circle.bindPopup(this.popupService.makeCapitalPopup(c));

      circle.addTo(map);
      }
      console.log(map);
      });
  }
}