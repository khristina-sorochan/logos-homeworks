import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // valueToFind: string = '';
  // value: string = '';
  //
  // arr: string[] = ['First', 'Second', 'Third', 'Other', 'Last'];
  //
  // arrObjects = [
  //   {
  //     name: 'Kristina',
  //     location: 'Lviv',
  //     job: 'Content Creator',
  //     hobby: 'Photography',
  //     status: 'In Progress'
  //   },
  //   {
  //     name: 'Anastasiia',
  //     location: 'Lviv',
  //     job: 'Personal Assistant',
  //     hobby: 'Make up',
  //     status: 'In Progress'
  //   },
  //   {
  //     name: 'Anna',
  //     location: 'Lviv',
  //     job: 'Finance Manager',
  //     hobby: 'Travel',
  //     status: 'In Progress'
  //   }
  // ];
  //
  // persons = this.arrObjects;
  //
  // deletePerson(i: number) {
  //   this.arrObjects.splice(i, 1);
  // };
  //
  // find() {
  //   this.persons = this.arrObjects.filter(item => {
  //     return item.name.toLowerCase().includes(this.valueToFind.toLowerCase());
  //   });
  // };
  //
  // random() {
  //   let count = Math.ceil(Math.random() * 10);
  //
  //   this.arrObjects = [];
  //
  //   for (let i = 0; i < count; i++) {
  //     this.arrObjects.push(
  //       {
  //         name: Math.random() >= 0.5 ? 'Kristina' : 'Anna',
  //         location: Math.ceil(Math.random() * 100).toString(),
  //         job: Math.ceil(Math.random() * 100).toString(),
  //         hobby: Math.ceil(Math.random() * 100).toString(),
  //         status: Math.random() >= 0.5 ? 'In Progress' : "Done"
  //       }
  //     );
  //   }
  //
  //   this.persons = this.arrObjects;
  // };
  //
  // done(i: number) {
  //   this.persons[i].status = 'Done';
  // };
  //
  // progress(i: number) {
  //   this.persons[i].status = 'In Progress';
  // };

}
