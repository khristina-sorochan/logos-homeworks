import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    localStorage.clear();
    let user = {
      name: 'kristina',
      role: Math.random() >= 0.5 ? 'admin' : 'user'
    }

    localStorage.setItem('user', JSON.stringify(user));

  }

}
