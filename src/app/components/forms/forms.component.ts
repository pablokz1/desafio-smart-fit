import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService) {
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
      this.results = data.locations;
      this.filtredResults = data.locations;
    }
    );
  }

  filtrerLocations() {
    if(!this.form.value.showClosed) {
      this.filtredResults = this.results.filter(location => !location.opened === true);
    } else {
      this.filtredResults = this.results;
    }
  }

  onSubmit() {
    console.log(this.form.value);
    this.filtrerLocations();
  }

  onClean() {
    this.form.reset();
  }

}
