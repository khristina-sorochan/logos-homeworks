import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  async getTodos(): Promise<any> {
    return new Promise(((resolve, reject) => {
      fetch( 'https://jsonplaceholder.typicode.com/todos', {
        method: 'get'
      }).then(res => res.json())
        .then(todos => {
          resolve(todos);
        })
        .catch(err => {
          throw new Error(err)
        });
    }));
  }



}
