import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { Specie, classArray, NameApi, ClassApi  } from './specie';


type LatinClass<T extends {latinName: string}> = T[keyof T]

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
  getClass(taxonid: number) : Observable<ClassApi>{
    //console.log("je suis dans getClass")
    const url = `${this.apiUrl}species/id/${taxonid}?token=${environment.apiKey}`
    return this.http.get<any>(url)
    .pipe(

      map(response => this.getFrenchClass(response.result[0].class, classArray)),
      // tap(item =>console.log('after map response.result',item)),
      // catchError(this.handleError('getClass', []))
    )
  }

 
  /**
   * Method to get the french class group of the specie
   * @param latinClass name of the latin class get with the getClass method from dataservice
   * @param classArray array of classes with latin and french name
   * @returns 
   */
   private getFrenchClass(latinClass : LatinClass<ClassApi>, classArray : ClassApi[]) : ClassApi{

    //function to return only classApi type 
    const getData = (latinClass: LatinClass<ClassApi>) => (classArray.find((item) => latinClass === item.latinName) as ClassApi);

      return getData(latinClass)
    
  }

  getDetail(latinName: string): Observable<NameApi[]> | undefined {
    const url = `${this.apiUrl}species/common_names/${latinName}?token=${environment.apiKey}`

    return this.http.get<any>(url)
    .pipe(

      map(response => response.result.filter((item : NameApi) =>  item.language === 'fre' || item.language === 'eng')),
      
      tap(item =>console.log(item)),
      catchError(this.handleError('getClass', []))
    )
  }
}
