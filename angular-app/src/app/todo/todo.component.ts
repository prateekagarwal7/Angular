import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  task: string = "";
  color = 'red';
  value = true;
  login = true;
  taskList: { id: number, task: string }[] = []//making the list of object type
  add() {
    this.taskList.push({ id: this.taskList.length + 1, task: this.task })//example of pushing a object in the list
    this.task = '';
  } delete(taskid: number) {
    this.taskList = this.taskList.filter((item) => item.id != taskid);

  }
  changecolor() {
    this.value = !this.value;
  }
}
