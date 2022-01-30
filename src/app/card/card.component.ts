import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Specie } from '../specie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() specie?: Specie

  constructor() { }

  ngOnInit(): void {
  }

}
