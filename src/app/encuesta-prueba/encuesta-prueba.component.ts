import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-encuesta-prueba',
  templateUrl: './encuesta-prueba.component.html',
  styleUrls: ['./encuesta-prueba.component.scss']
})
export class EncuestaPruebaComponent implements OnInit {

   form!: FormGroup;

  constructor(
    private formbuilder : FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formbuilder.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.email]],
      text: ['', [Validators.maxLength(200)]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });

    //this.form.valueChanges
    //.subscribe(value => {
     // console.log(value);
    //});
  }

  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
  }

}