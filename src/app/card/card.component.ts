import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Specie, classSpecie } from '../specie';
import { Observable } from 'rxjs';

import { Category, categoryOption } from '../category';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() specie?: Specie
    
  category? : Category
  
  class? :keyof typeof classSpecie

  frenchClass? : string
  
  constructor(private  dataService: DataService) {}
  
  ngOnInit(): void {
    
    this.getCategoryOption(this.specie!.category, categoryOption)
    this.dataService.getClass(this.specie!.taxonid).subscribe((item : keyof typeof classSpecie)=> this.class= item)
    
  }

  private getCategoryOption(category :string, catOption : Category[]): void{
    const currentCat = catOption.filter(cat => cat.categoryName === category)
    this.category = currentCat[0]
  }
  
  private getFrenchClass() {
    
  }
}
