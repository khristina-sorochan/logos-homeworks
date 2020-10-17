import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  tasks = [
    {
      title: 'Do homework',
      status: true,
      statusInfo: 'Done',
      startDate: new Date().toUTCString(),
      endDate: new Date('2020-11-12').toUTCString()
    },
    {
      title: 'Learn JS',
      status: true,
      statusInfo: 'Done',
      startDate: new Date().toUTCString(),
      endDate: new Date('2020-11-12').toUTCString()
    },
    {
      title: 'Visit a friend',
      status: true,
      statusInfo: 'Done',
      startDate: new Date().toUTCString(),
      endDate: new Date('2020-11-10').toUTCString()
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(i: number) {
    this.tasks[i].status = !this.tasks[i].status;
    this.tasks[i].statusInfo = this.tasks[i].status ? 'Done' : 'In Progress';
  }

}

