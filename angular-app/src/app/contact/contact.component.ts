import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  username:string|null=""
  constructor(private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('name');
  }

}
