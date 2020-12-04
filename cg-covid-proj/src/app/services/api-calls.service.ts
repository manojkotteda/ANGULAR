import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  private host = "https://capg-covid-proj1.herokuapp.com";

  constructor(private _http: HttpClient) { }

  getAllData(): Observable<any>{
    return this._http.get<any>(`${this.host}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getAllNews(): Observable<any>{
    return this._http.get<any>(`${this.host+"/getNews"}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert("Please check your internet connection!.");
    return throwError(errorMessage);
 }

}
