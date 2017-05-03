import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

export const firebaseConfig = {
    apiKey: "AIzaSyD_2-Wzj0lvp6SAKCiAfyxqbK-_-Oclfx8",
    authDomain: "angular-todo-6d867.firebaseapp.com",
    databaseURL: "https://angular-todo-6d867.firebaseio.com",
    projectId: "angular-todo-6d867",
    storageBucket: "angular-todo-6d867.appspot.com",
    messagingSenderId: "931300696128"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddTodoComponent,
    ViewTodoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig) ,
    routes

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
