import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', children:[
        {path: '',  component: HomeComponent, canActivate: [AuthGuard], pathMatch: 'full'  },
        {path: 'add-todo', component: AddTodoComponent },
        {path: 'view-todo', component: ViewTodoComponent }
    ]}

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);