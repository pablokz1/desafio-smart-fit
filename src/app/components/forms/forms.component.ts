import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  results = [];
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      hour: '',
      showClosed: false
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onClean() {
    this.form.reset();
  }

}
