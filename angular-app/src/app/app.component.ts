import { Component } from '@angular/core';
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
})
export class AppComponent {
  title = 'angular-app';// this is property we can not define the variable directly inside class
  age = 10;
  surname: string = "prateek";// this is ised to assing the data type to properties
  address: string | number = "rrr";// either of the two specifies data type can be put inside it
  others: any;//any data type can be put inside it
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
}
