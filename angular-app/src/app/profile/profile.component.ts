import { Component} from '@angular/core';// we are injecting the dependencies 


@Component({
  selector: 'app-profile',
  standalone: true,// it is important for importing the component to the other component
  template: `<h1>Profile component</h1>`,// these 2 are necessary to make a component
  styles:'h1{background-color: blue}'
})
export class Profile{
  // it is the class of the component

}
