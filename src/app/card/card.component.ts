import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Specie, classArray, ClassApi, NameApi } from '../specie';
import { Observable } from 'rxjs';
import { Category, categoryOption } from '../category';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('openClose', [
      state('true', style({ height: '*', opacity: 1 })),
      state('false', style({ height: '0px', opacity: 0 })),
      transition('false <=> true', animate(500))
    ])
  ],
})

export class CardComponent implements OnInit {

  @Input() specie?: Specie

  category? : Category

  class? :ClassApi

  name? : string

  showMore : boolean = false

  constructor(private  dataService: DataService) {}

  ngOnInit(): void {

    this.getCategoryOption(this.specie!.category, categoryOption)

    //this.dataService.getClass(this.specie!.taxonid).subscribe(item => this.class = item)

  }

  /**
   * Method to attribute bootstrap classes and french category with the category property from API to the class property of component
   * @param category category from the specie object from api
   * @param catOption array of categories with their bootstrap options
   */
  private getCategoryOption(category :string, catOption : Category[]): void{
    this.category = catOption.find(cat => cat.categoryName === category)
  }


  handleClick() {
    const result = this.dataService.getName(this.specie!.scientific_name)
    this.showMore = !this.showMore
    console.log(this.showMore)
    if (result) {
        result.subscribe(item => this.name = this.chooseName(item))
      }
      else {
        this.name = 'Non renseigné'
      }

  }

  chooseName(nameArray: NameApi[]): string | undefined {
    if (nameArray.length === 0) {
      return 'Non renseigné'

    }
    else {
      let filled = false
      nameArray.map(item => {

        if (!filled && Object.values(item).includes('fre')) {
          filled = true
          return item.taxonname
        }
        else if (!filled && Object.values(item).includes('eng')){
          filled = true
          return item.taxonname
        }
        else {
          return 'Non renseigné'
        }
      })
      return
    }
  }
}
