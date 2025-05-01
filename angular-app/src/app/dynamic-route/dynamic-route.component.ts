import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dynamic-route',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dynamic-route.component.html',
  styleUrl: './dynamic-route.component.css'
})
export class DynamicRouteComponent {
  users = [{
    id: '1',
    name: 'prateek'
  },
    {
      id: '3',
      name: 'anil'
    },
    {
      id: '3',
      name: 'kumar'
    },
  ]
}
