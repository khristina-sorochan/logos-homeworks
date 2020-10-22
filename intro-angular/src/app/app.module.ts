import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { CalculatorComponent } from "./calculator/calculator.component";
import { UserComponent } from "./components/user/user.component";
import { TodoComponent } from "./components/todo/todo.component";
import { PostComponent } from "./components/post/post.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { MarketComponent } from "./components/market/market.component";
import { MarketItemComponent } from "./components/market-item/market-item.component";
import { TodosComponent } from './components/todos/todos.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProdDirective } from './directives/prod.directive';
import { FormsComponent } from './components/forms/forms.component';

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
    NotFoundComponent,
    MarketComponent,
    MarketItemComponent,
    TodosComponent,
    BasketComponent,
    ProdDirective,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
