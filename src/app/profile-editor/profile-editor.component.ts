import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
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
}
