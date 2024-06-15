import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, retry } from 'rxjs';
import { UnitsResponse } from '../types/unit-response.interface';
import { Locations } from '../types/locations.interface';

@Injectable({
  providedIn: 'root'
})
export class GetUnitsService {
  readonly apiUrl = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  private allUnitsSubject: BehaviorSubject<Locations[]> = new BehaviorSubject<Locations[]>([]);
  private allUnits$: Observable<Locations[]> = this.allUnitsSubject.asObservable();
  private filteredUnits: Locations[] = [];

  constructor(private http: HttpClient) {
    this.http.get<UnitsResponse>(this.apiUrl).subscribe(data => {
      this.allUnitsSubject.next(data.locations);
      this.filteredUnits = data.locations;
    });;
   }

  getAllUnitss(): Observable<Locations[]> {
    return this.allUnits$;
  }

  getFilteredUnits() {
    return this.filteredUnits;
  }

  setFilteredUnits(value: Locations[]) {
    this.filteredUnits = value;
  }
}
