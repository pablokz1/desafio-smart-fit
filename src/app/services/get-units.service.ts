import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnitsResponse } from '../types/unit-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GetUnitsService {
  readonly apiUrl = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json'

  constructor(private http: HttpClient) { }

  getAllUnitss(): Observable<UnitsResponse> {
    return this.http.get<UnitsResponse>(this.apiUrl);
  }
}
