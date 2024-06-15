import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterUnitService } from 'src/app/services/filter-unit.service';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { Locations } from 'src/app/types/locations.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  results: Locations[] = [];
  filtredResults: Locations[] = [];
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService,
    private filterService: FilterUnitService) {
    this.form = this.formBuilder.group({
      hour: '',
      showClosed: true
    });
  }

  ngOnInit(): void {
    this.loadAllUnitis();
  }

  loadAllUnitis() {
    this.unitService.getAllUnitss().subscribe(data => {
      this.results = data;
      this.filtredResults = data;
    });
  }

  onSubmit() {
    let { hour, showClosed } = this.form.value;
    this.filtredResults = this.filterService.filtrer(this.results, showClosed, hour);
    this.unitService.setFilteredUnits(this.filtredResults);
  }

  onClean() {
    this.form.reset();
  }

}
