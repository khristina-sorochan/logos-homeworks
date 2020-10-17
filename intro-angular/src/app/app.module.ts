import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { CalculatorComponent } from "./calculator/calculator.component";
import { UserComponent } from "./components/user/user.component";
import { TodoComponent } from "./components/todo/todo.component";
import { PostComponent } from "./components/post/post.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CalculatorComponent,
    UserComponent,
    TodoComponent,
    PostComponent,
    HomeComponent,
    ContactsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
