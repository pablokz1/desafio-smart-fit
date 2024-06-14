import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  results = [];
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService) { 
    this.form = this.formBuilder.group({
      hour: '',
      showClosed: false
    });
  }

  ngOnInit(): void {
    this.unitService.getAllUnitss().subscribe(data => console.log(data));
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onClean() {
    this.form.reset();
  }

}
