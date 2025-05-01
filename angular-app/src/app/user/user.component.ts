import { Component } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  name :null|string=""
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe((param) => {
      console.log(param);
      this.name = param['name']
    })
  }

}
