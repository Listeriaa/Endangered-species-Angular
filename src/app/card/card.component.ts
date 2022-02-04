import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Specie } from '../specie';
import { Category, categoryOption } from '../category';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() specie?: Specie
    
  category? : Category

  constructor() {}
  
  ngOnInit(): void {
    
    this.getCategoryOption(this.specie!.category, categoryOption)
  }

  private getCategoryOption(category :string, catOption : Category[]): void{
    const currentCat = catOption.filter(cat => cat.categoryName === category)
    this.category = currentCat[0]
  }
  
}
