import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

// export class TodoComponent implements OnInit {
//
//   todos: any[] = [];
//
//   constructor(public todoService: TodoService) { }
//
//   async ngOnInit() {
//     this.todos = await this.todoService.getTodos();
//   }
//
// }

export class TodoComponent implements OnInit {

  task: string;
  tasks = [];

  @Output() counterTask = new EventEmitter<any>();

  constructor() { }

  createTask(){
    this.counterTask.emit('created');
    this.tasks.push(
      {
        name: this.task,
        status: 'In Progress',
        checked: false
    });
    this.task = '';
  }

  changeStatus(i: number) {
    this.tasks[i].checked = !this.tasks[i].checked;
    this.tasks[i].status = this.tasks[i].checked ? 'Done' : 'In Progress';
    if (this.tasks[i].checked === true) this.counterTask.emit('completed');
    else this.counterTask.emit('activated');
  }

  deleteTask(i: number) {
    this.counterTask.emit('deleted');
    this.tasks.splice(i, 1);
  }

  ngOnInit(): void {
  }

}
