import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }   from './login/login.component';
import {JungleComponent } from './jungle/jungle.component';
import { TaskComponent } from './task/task.component';
import { ProjectComponent } from './project/project.component';
import { AddProjectComponent } from './project/add-project/add-project.component';

const routes: Routes = [

  { path : 'main', component: JungleComponent, children: [

    { path : 'login', component: LoginComponent},
    { path : 'task', component: TaskComponent},
    { path : 'project', component: ProjectComponent}
  ]},

 { path: 'add-project', component: AddProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
