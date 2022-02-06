import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import {Specie} from './specie'
import { NameApi } from './typeApi';



@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http : HttpClient) { }
  
  //private apiUrl = "https://api.endangered-species.laetitia-dev.com/api/v1"
  private apiUrl = "https://apiv3.iucnredlist.org/api/v3/"

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to console instead

      return of(result as T);
    };
  }

  /**
   * method to get all species in France belonging to filtered categories
   * @returns Observable array of specie Object
   */
  getList(): Observable<Specie[]> {

    const url = `${this.apiUrl}country/getspecies/FR?token=${environment.apiKey}`
 
    return this.http.get<any>(url)
    .pipe(
      
      map(response => response.result.filter((item: Specie)=> item.category === "CR" || item.category === "EN" || item.category === "VU" || item.category === "EX" || item.category === "EW")),
      catchError(this.handleError('getList', [])))
  }

  /**
   * Method to get the latin Class of a specie
   * @param taxonid id number of the specie, in the object specie returned by API
   * @returns Observable string of the latin class of the specie
   */
  getClass(taxonid: number) {
    //console.log("je suis dans getClass")
    const url = `${this.apiUrl}species/id/${taxonid}?token=${environment.apiKey}`
    return this.http.get<any>(url)
    .pipe(

      map(response => response.result[0].class),
      // tap(item =>console.log(item)),
      catchError(this.handleError('getClass', []))
    )
  }


  getDetail(latinName: string) {
    const url = `${this.apiUrl}species/common_names/${latinName}?token=${environment.apiKey}`

    return this.http.get<any>(url)
    .pipe(

      map(response => response.result.filter((item : NameApi) =>  item.language === 'fre' || item.language === 'eng')),
      
      tap(item =>console.log(item)),
      catchError(this.handleError('getClass', []))
    )
  }
}
