import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { DataService } from './data.service';
import { Specie } from './specie';
import BIRDS from 'vanta/dist/vanta.birds.min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-iucn';

  constructor(private dataService : DataService) { }

  list$?: Observable<Specie[]>;

  numberSpecies?: Observable<any>;

  ngOnInit() {
    //as list$ is typed as Observable, no need for subscription thanks to async in template
    //shareReplay
    this.list$ = this.dataService.getList().pipe(shareReplay())

  }
}
