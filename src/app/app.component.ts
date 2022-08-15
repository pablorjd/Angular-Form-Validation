import { Component, OnInit, VERSION } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(
          '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}'
        ),
      ]),
    });
  }
  name = 'Angular Form Validation' + VERSION.major;

  get formControlName() {
    return this.form.get('name');
  }
  get formControlEmail() {
    return this.form.get('email');
  }

  sendForm() {
    console.log(this.form.invalid);

    if (this.form.invalid) {
      Swal.fire(
        'Los Campos deben ser Válidos',
        'Se deben completar ambos campos',
        'error'
      );
      return;
    }
    console.log(this.form);
    Swal.fire({
      title: 'Datos del Formulario',
      text: `Formulario ${JSON.stringify(this.form.value)}`,
    });
  }
}
