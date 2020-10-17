import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  async getPosts(): Promise<any> {
    return new Promise(((resolve, reject) => {
      fetch( 'https://jsonplaceholder.typicode.com/posts', {
        method: 'get'
      }).then(res => res.json())
        .then(posts => {
          resolve(posts);
        })
        .catch(err => {
          throw new Error(err)
        });
    }));
  }



}
