import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;

  enviado = false;

  constructor(
    private fb: FormBuilder
  ) {

    this.contactForm = this.fb.group({

      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      correo: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      telefono: [
        '',
        [
          Validators.required
        ]
      ],

      mensaje: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]

    });

  }

  onSubmit(): void {

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;

    }

    console.log(this.contactForm.value);

    this.enviado = true;

    this.contactForm.reset();

  }

}
