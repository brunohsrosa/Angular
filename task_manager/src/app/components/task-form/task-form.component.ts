import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  title: string = '';

  @Output() addTask = new EventEmitter<string>();

  submit(): void {
    if (!this.title.trim()) return; 
  }

}
