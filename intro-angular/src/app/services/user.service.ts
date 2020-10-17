import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async getUsers(): Promise<any> {
    return new Promise(((resolve, reject) => {
      fetch( 'https://jsonplaceholder.typicode.com/users', {
        method: 'get'
      }).then(res => res.json())
        .then(users => {
          resolve(users);
        })
        .catch(err => {
          throw new Error(err)
        });
    }));
  }



}
