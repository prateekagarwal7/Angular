import { Component } from '@angular/core';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css'
})
export class FormGroupComponent {
  profile = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.maxLength(10)]),//there is one more validator that is pattern
  age: new FormControl()
  })
  submitted() {
    console.log(this.profile.value);
  }
  settingval() {
    this.profile.setValue({
      name: 'anil kumar',
      age:21
    })
  
  }
  get name() {
    return this.profile.get('name');
  }
}
