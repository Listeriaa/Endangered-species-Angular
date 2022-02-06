import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Specie, classArray } from '../specie';
import { Observable } from 'rxjs';
import { ClassApi } from '../typeApi';

import { Category, categoryOption } from '../category';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() specie?: Specie
    
  category? : Category
  
  class? :ClassApi
  
  constructor(private  dataService: DataService) {}
  
  ngOnInit(): void {
    
    this.getCategoryOption(this.specie!.category, categoryOption)
    this.dataService.getClass(this.specie!.taxonid).subscribe((item)=> this.class = this.getFrenchClass(item, classArray))
    
  }

  /**
   * Method to attribute bootstrap classes and french category with the category property from API to the class property of component
   * @param category category from the specie object from api
   * @param catOption array of categories with their bootstrap options
   */
  private getCategoryOption(category :string, catOption : Category[]): void{
    const currentCat = catOption.find(cat => cat.categoryName === category)
    this.category = currentCat
  }
  
  /**
   * Method to get the french class group of the specie
   * @param latinClass name of the latin class get with the getClass method from dataservice
   * @param classArray array of classes with latin and french name
   * @returns 
   */
  private getFrenchClass(latinClass : string, classArray : ClassApi[]) : ClassApi |undefined {

    return classArray.find(item => item.latinName == latinClass)
    
  }

  handleClick() {
    this.dataService.getDetail(this.specie!.scientific_name).subscribe(item => console.log(item.taxonname))
  }
}
