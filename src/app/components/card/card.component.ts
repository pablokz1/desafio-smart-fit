import { Component, Input, OnInit } from '@angular/core';
import { Locations } from 'src/app/types/locations.interface';
import { NgClass, NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: true,
    imports: [NgClass, NgIf, NgFor]
})
export class CardComponent implements OnInit {
  @Input() card!: Locations;

  constructor() { }

  ngOnInit(): void {
  }

}
