import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Profile } from './profile/profile.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, Profile, CounterComponent],//importing the login component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  //styleUrls:['',''] if we have more than one fine for styling of the componet
})
export class AppComponent {
  students = [
    {
      age: 21,
      name: 'prateek',
    },
    {
      age: 23,
      name:'anil'
    }
  ]
  x = signal<number | string>(10);//definignt the typpe of value that can be given to a signal
  y: WritableSignal<number|string> = signal("hello")// this is the writable signal
  //update method is similar to use as that of set method x.set((val)=>val+1) instead of set we can use update but there is limitation for using update there must a fixed data type of value that is passed in signal
  constructor() {
    effect(()=>{
      console.log(this.x());
    })
  }
  title = 'angular-app';// this is property we can not define the variable directly inside class
  age = 10;
  surname: string = "prateek";// this is ised to assing the data type to properties
  address: string | number = "rrr";// either of the two specifies data type can be put inside it
  others: any;//any data type can be put inside it
  email: string | undefined = "";
  a = signal(10);
  b = signal(20);
  result = computed(() => this.a() + this.b());
  dispaly = true;
  hello() {
    let c = 10;//making my variable
    this.others = true;
    this.address = 123;
  }
  clickmebtn() {
    //console.log("function for the button cick");
    this.anotherfunc();//calling another function of same class using this keyword
  }
  anotherfunc() {
    console.log("function for the button cick");

  }
  eventhandler(event: any) {
    console.log(event);
  }
  getValue(email: string) {
    this.email = email;
  }
  status() {
    this.dispaly = !this.dispaly;
  }
  computedsignal() {
    this.a.set(100);

  }

}
