import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Specie } from '../specie';

interface Category  {
  categoryName: "CR" | "VU" | "EX" | "EW" | "EN"
  categoryMessage :string
  badgeClass: string

}
const CR: Category = {
  categoryName: "CR",
  categoryMessage: "En danger critique",
  badgeClass: "bg-danger",
}
const VU: Category = {
  categoryName: "VU",
  categoryMessage: "Vulnérable",
  badgeClass: "bg-warning text-dark"
}

const EX: Category = {
  categoryName: "EX",
  categoryMessage: "Eteint",
  badgeClass: "bg-dark",
}
const EW: Category = {
  categoryName: "EW",
  categoryMessage: "Eteint à l'état sauvage",
  badgeClass: "bg-dark",
}
const EN: Category = {
  categoryName: "EN",
  categoryMessage: "En danger",
  badgeClass: "bg-danger text-dark"
}
const categoryOption  = [CR, EX, EW, EN, VU]


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

  constructor() {}
  

  ngOnInit(): void {
    
    this.getCategoryOption(this.specie!.category, categoryOption)
  }

  private getCategoryOption(category :string, catOption : Category[]): void{
    const currentCat = catOption.filter(cat => cat.categoryName === category)
    this.category = currentCat[0]
  }
  
}
