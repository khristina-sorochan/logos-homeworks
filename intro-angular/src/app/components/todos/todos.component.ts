import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  created: number = 0;
  deleted: number = 0;
  completed: number = 0;

  constructor() { }

  counterTask(type: string): void {
    switch (type) {
      case 'created':
        this.created++;
        break;
      case 'deleted':
        this.deleted++;
        this.created--;
        break;
      case 'completed':
        this.completed++;
        break;
      case 'activated':
        this.completed--;
        break;
    }
  }

  ngOnInit(): void {
  }

}
