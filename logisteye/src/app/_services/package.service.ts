import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Package } from '../pages/models/package';

@Injectable({ providedIn: 'root' })
export class PackageService {
    baseUrl = environment.apiUrl + '/packages/';

    constructor(private http: HttpClient) { }

    getPackages(): Observable<Package[]>{
        return this.http.get<Package[]>(this.baseUrl);
    }
}
