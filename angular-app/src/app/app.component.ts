import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Profile } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, Profile],//importing the login component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';// this is property we can not define the variable directly inside class
  age = 10;
  hello() {
    let c = 10;//making my variable
  }
  clickmebtn() {
    //console.log("function for the button cick");
    this.anotherfunc();//calling another function of same class using this keyword
  }
  anotherfunc() {
    console.log("function for the button cick");

  }
}
