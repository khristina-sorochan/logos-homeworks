import { Component } from '@angular/core';
import {UserService} from "./services/user.service";
import {TodoService} from "./services/todo.service";
import {PostService} from "./services/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users: any[] = [];
  todos: any[] = [];
  posts: any[] = [];

  constructor(public userService: UserService,
              public todoService: TodoService,
              public postService: PostService) {
  }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
    this.todos = await this.todoService.getTodos();
    this.posts = await this.postService.getPosts();
    console.log('users', this.users);
    console.log('todos', this.todos);
    console.log('posts', this.posts);
  }

}
