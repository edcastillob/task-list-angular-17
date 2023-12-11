import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from './service/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Task List APP';

  taskList: string[] = [];
  newTask: string = "";

  private _taskService = inject(TaskService)

ngOnInit(): void {
  this.taskList = this._taskService.getTasks();
}

addTask(){
  this._taskService.newTask(this.newTask);
  this.newTask = "";
  this.taskList = this._taskService.getTasks();
}

deleteTask(index: number){
  this._taskService.deleteTask(index)
  this.taskList = this._taskService.getTasks();
}

}
