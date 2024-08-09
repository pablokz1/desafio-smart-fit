import { Component, Input, OnInit } from '@angular/core';
import { Locations } from 'src/app/types/locations.interface';
import { CardComponent } from '../card/card.component';


@Component({
    selector: 'app-cards-list',
    templateUrl: './cards-list.component.html',
    styleUrls: ['./cards-list.component.scss'],
    standalone: true,
    imports: [CardComponent]
})
export class CardsListComponent implements OnInit {
  @Input() unitsList: Locations[] = [];
  
  constructor() { }

  ngOnInit(): void {}

}
