import {Injectable} from "@angular/core";
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {SimulationParams} from "../pages/models/simulation-params";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  baseUrl = environment.hostUrl + 'simulation/';

  constructor(private httpClient: HttpClient) {
  }

  public loadSimulationData(params: SimulationParams): Observable<any> {
    return this.httpClient.post(this.baseUrl, params);
  }
}
