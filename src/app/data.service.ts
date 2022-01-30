import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Specie} from './specie'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  //private apiUrl = "https://api.endangered-species.laetitia-dev.com/api/v1"
  private apiUrl = "http://localhost:8000/api/v1"

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getList(): Observable<Specie[]> {

    const url = `${this.apiUrl}/list`
    
    return this.http.get<Specie[]>(url)
    .pipe(
      
      catchError(this.handleError('getList', [])))
  }
}
