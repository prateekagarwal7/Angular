import { Component} from '@angular/core';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  user = "preet"
  valuechange(x:string) {
    this.user = x;
  }
  handleuser(user:string) {
    console.log(user)
  }

}
