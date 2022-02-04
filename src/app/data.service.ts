import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
  private apiUrl = "https://apiv3.iucnredlist.org/api/v3/"

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

    const url = `${this.apiUrl}country/getspecies/FR?token=${environment.apiKey}`
    //const url = `${this.apiUrl}/list`
    const list = this.http.get(url)
    console.log(list)
    return this.http.get<any>(url)
    .pipe(
      map(response => response.result),
      catchError(this.handleError('getList', [])))
  }


}
