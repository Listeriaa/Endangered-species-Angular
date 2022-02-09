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

  category?: Category

  class?: ClassApi

  name?: string

  url? : string

  threats?: string[]
  
  english?: boolean

  showMore: boolean = false

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.getCategoryOption(this.specie!.category, categoryOption)

    //this.dataService.getClass(this.specie!.taxonid).subscribe(item => this.class = item)

  }

  /**
   * Method to attribute bootstrap classes and french category with the category property from API to the class property of component
   * @param category category from the specie object from api
   * @param catOption array of categories with their bootstrap options
   */
  private getCategoryOption(category: string, catOption: Category[]): void {
    this.category = catOption.find(cat => cat.categoryName === category)
  }


  handleClick() {
    this.showMore = !this.showMore

    //fetch of name
    if (!this.name) {
      const result = this.dataService.getName(this.specie!.scientific_name)
      if (result) {
        result.subscribe(item => {

          [this.name, this.english] = this.chooseName(item)

        })
      }
      else {
        this.name = "Non renseigné"
        this.english = false
      }
    }

    //fetch of url

    if (!this.url) {
      const result = this.dataService.getUrl(this.specie!.scientific_name)

      if (result){
        result.subscribe(item => this.url = item)
      }
      else {
        this.url = 'https://www.iucnredlist.org'
      }
    }

    //fetch of threats
    const test = this.dataService.getThreats(this.specie!.taxonid)

    if (test){
      test.subscribe()
    }
    else {
    }

  }

  chooseName(nameArray: NameApi[]): [string, boolean] {

    let name: string = ''
    let english: boolean = false
    let filled = false

    if (nameArray.length === 0) {
      name = 'Non renseigné'
    }
    else {
      nameArray.map(item => {

        if (!filled && Object.values(item).includes('fre')) {
          filled = true
          name = item.taxonname

        }
        else if (!filled && Object.values(item).includes('eng')) {
          filled = true
          name = item.taxonname
          english = true

        }
        else if (!filled) {
          filled = true
          name = 'Non renseigné'

        }
      })
    }
    return [name, english]
  }
}
