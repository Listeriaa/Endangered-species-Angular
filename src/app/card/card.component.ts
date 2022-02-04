import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Specie } from '../specie';

interface Category  {
  categoryMessage :string,
  badgeClass: string,
  badgeColorText?: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() specie?: Specie
  
  categoryMessage?: string
  
  badgeClass?: string
  
  badgeColorText?: string
  
  category? : Category

  categoryOption  = {
    CR :{
      categoryMessage: "En danger critique",
      badgeClass: "bg-danger",
    },
    VU :{
      categoryMessage: "Vulnérable",
      badgeClass: "bg-warning",
      badgeColorText:"text-dark"
    },
    EX :{
      categoryMessage: "Eteint",
      badgeClass: "bg-dark",
    },
    EW :{
      categoryMessage: "Eteint à l'état sauvage",
      badgeClass: "bg-dark",
    },
    EN :{
      categoryMessage: "En danger",
      badgeClass: "bg-success",
      badgeColorText:"text-dark"
    },

  }
  constructor() {}
  

  ngOnInit(): void {
    console.log(this.specie)
    this.getCategoryOption(this.specie!.category, this.categoryOption)
  }

  private getCategoryOption<T, C extends keyof T>(category : C, catOption: T ): void {
    this.category = catOption[category]
  }
  
}
