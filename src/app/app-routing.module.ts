import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component';
import { MentorComponent } from './mentor/mentor.component';
import {AssignComponent} from './assign/assign.component';
import {ListComponent} from './list/list.component';
const routes: Routes = [
  {
    path:'',
   component:MentorComponent
},{
  path:'create-student',
  component:StudentComponent
},{
  path:'assign',
  component:AssignComponent
},{
  path:'list',
  component:ListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
