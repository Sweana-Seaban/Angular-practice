import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, FormsModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css',
})
export class ProfileEditorComponent {
  private formBuilder = inject(FormBuilder);
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    skills: new FormArray([
      new FormControl(null),
      new FormControl(null),
      new FormControl(null),
    ]),
  });

  onSubmit() {
    console.log('Form values', this.profileForm.value);
  }

  get skills(): FormArray {
    return this.profileForm.get('skills') as FormArray;
  }

  user1 = new User('TOM', 'CRUISE', 'tom@gmail.com');

  submitted = false;
  onFormSubmit(form: NgForm) {
    console.log('Form Submitted ', form.value);
  }
}

class User {
  firstName: string;
  lastName: string;
  email: string;

  constructor(firstname: string, lastname: string, email: string) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.email = email;
  }
}
