import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.innitForm();
  }

  /** Ініціалізация форми*/
  innitForm() {
    this.loginForm = this.formBuilder.group({
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        password: ['', [
          Validators.required,
          Validators.minLength(8)
        ]]
      }
    );
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  get f() {
    return this.loginForm.controls;
  }

  // submit() {
  //   this.submitted = true;
  //
  //   if (this.loginForm.invalid) return;
  //
  //   alert('Form sent');
  //   console.log(this.loginForm.value);
  // }

  onSubmit() {
    const controls = this.loginForm.controls;

    /** Перевіряєм форму на валідність */
    if (this.loginForm.invalid) {
      /** Якщо форма не валідна, то помічаємо всі контроли як touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      /** Перериваємо виповнення методу*/
      return;
    }

    alert('Form sent');

    /** TODO: Обробка даних форми */
    console.log(this.loginForm.value);
  }

}
