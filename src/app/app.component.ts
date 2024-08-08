import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Locations } from './types/locations.interface';
import { GetUnitsService } from './services/get-units.service';
import { FooterComponent } from './components/footer/footer.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { NgIf, AsyncPipe } from '@angular/common';
import { LegendsComponent } from './components/legends/legends.component';
import { FormsComponent } from './components/forms/forms.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [HeaderComponent, FormsComponent, LegendsComponent, NgIf, CardsListComponent, FooterComponent, AsyncPipe]
})
export class AppComponent {
  showList = new BehaviorSubject<boolean>(false);
  unitsList: Locations[] = [];

  constructor(private unitService: GetUnitsService) { }

  onSubmit() {
    this.unitsList = this.unitService.getFilteredUnits();
    this.showList.next(true);
  }
}
