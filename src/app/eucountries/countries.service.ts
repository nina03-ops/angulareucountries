import { Country } from './country';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


const api = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }
  // CRUD functions
  getCountries() {
    return this.http.get<Array<Country>>(`${api}/countries`)
    .pipe(
      catchError(this.handleError<Country[]>('getCountries', []))
    );
  }
 
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}
}
