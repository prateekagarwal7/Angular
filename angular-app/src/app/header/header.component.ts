import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name="pqwe"
  constructor(private route:Router) { }
  contactclick() {
    this.route.navigate(['contact'], { queryParams: { name: 'prt'} })
  }
}
