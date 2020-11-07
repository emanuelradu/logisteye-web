import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/_services/package.service';
import { Package } from '../models/package';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
  displayedColumns: string[] = ['is_delivered', 'date', 'current_location', 'destination_location', 'company'];
  dataSource: Package[];

  constructor(private packageService: PackageService) {
    this.packageService.getPackages().subscribe(data => {
      console.log(data);
      this.dataSource = data;
    });
   }

  ngOnInit(): void {
  }

}
