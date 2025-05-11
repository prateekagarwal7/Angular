import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() getuser = new EventEmitter();
  usersname=['anil','sharma','hello']
  @Input() username: string = ''
  ngOnInit() {
    this.getuser.emit(this.usersname)
  }
}
