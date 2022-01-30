import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Specie } from './specie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-iucn';

  constructor(private dataService : DataService) { }

  list?: Specie[]

  ngOnInit(): void {

    this.dataService.getList().subscribe(list => this.list = list)
  }
}
