import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { environment } from "../../environments/environment";

@Injectable()
export class WeatherService {
  constructor(private http: Http) {}

  getWeatherByCity(cityName: string): Observable<any> {
    return this.http
      .get(
        environment.baseUrl +
          "forecast?q=" +
          cityName +
          "&appid=" +
          environment.appId +
          "&units=" +
          environment.units
      )
      .map(response => this.extractData(response))
      .catch(this.handleError);
  }
  getWeatherByLocation(latitude: string, longitude: string): Observable<any> {
    return this.http
      .get(
        environment.baseUrl +
          "forecast?lat=" +
          latitude +
          "&lon=" +
          longitude +
          "&appid=" +
          environment.appId +
          "&units=" +
          environment.units
      )
      .map(response => this.extractData(response))
      .catch(this.handleError);
  }

  private extractData(res: any) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg: string;
    errMsg = error.message ? error.message : error.toString();
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
