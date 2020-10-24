import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  welcomeForm: FormGroup;
  status: string = 'INVALID';
  // submitted: boolean = false;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.innitForm();
  }

  innitForm() {
    this.welcomeForm = this.formBuilder.group({
        name: ['', Validators.required],
        address: ['', Validators.required]
      }
    );
  }

  get f() {
    return this.welcomeForm.controls;
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.f[controlName];

    return control.invalid && control.touched;
  }

  onSubmit() {
    const controls = this.f;

    if (this.welcomeForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }

    this.status = 'VALID';

    console.log(this.welcomeForm.value);
    alert('Form sent');
  }

}
