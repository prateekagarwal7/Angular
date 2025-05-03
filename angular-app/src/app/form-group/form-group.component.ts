import { Component } from '@angular/core';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css'
})
export class FormGroupComponent {
  profile = new FormGroup({
  name: new FormControl(),
  age: new FormControl()
  })
  submitted() {
    console.log(this.profile.value);
  }
  settingval() {
    this.profile.setValue({
      name: 'anil',
      age:21
    })
  }
}
