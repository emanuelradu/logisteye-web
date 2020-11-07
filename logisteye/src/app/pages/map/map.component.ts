import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import {LatLng} from "leaflet";
import { MarkerService } from 'src/app/_services/marker.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map;

  constructor(private markerService: MarkerService) { }

  ngAfterViewInit(): void {
    this.initMap()
    this.markerService.makeLockers(this.map);
    this.markerService.makeHeatMap(this.map);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 48.8566, 2.3522 ],
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

   tiles.addTo(this.map);

    const latlngs = [new LatLng(48.801, 2.130),
      new LatLng(48.801, 2.134),
      new LatLng(48.804, 2.134),
      new LatLng(48.804, 2.130)];
    L.polygon(latlngs, {color: 'yellow'}).addTo(this.map);
  }
}
