import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  private geolocationPosition: string = "India";

  constructor(private http: HttpClient) { }

  public locationApi(Latitude: number, Longitude: number): Observable<any> {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${Latitude}&lon=${Longitude}&zoom=18&addressdetails=1`
    //Call API
    return this.http.get(url);
  }

  public covidIndiaLocationApi(): Observable<any> {
    const url = `https://api.apify.com/v2/datasets/58a4VXwBBF0HtxuQa/items?format=json&clean=1`
    //Call API
    return this.http.get(url)
  }



  public getGeoLocation(): String {
    return this.geolocationPosition
  }
}
