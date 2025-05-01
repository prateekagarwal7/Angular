import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  name = new FormControl('anil');
  password = new FormControl('123');
  reactiveget() {
    console.log(this.name.value)
  }
  reactiveset() {
    this.name.setValue('prateek')
    this.password.setValue('12342')
  }
}
