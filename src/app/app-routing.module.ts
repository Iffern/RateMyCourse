import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseAddComponent} from './course-add/course-add.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthenticationGuard} from './authentication.guard';
import {CourseEditComponent} from './course-edit/course-edit.component';
import {AdminComponent} from './admin/admin.component';


const routes: Routes = [
  {path: '', redirectTo: 'course-list', pathMatch: 'full'},
  {path: 'course-list', component: CourseListComponent},
  {path: 'course-details/:id', component: CourseDetailsComponent},
  {path: 'course-add', component: CourseAddComponent, canActivate: [AuthenticationGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'course-edit', component: CourseEditComponent, canActivate: [AuthenticationGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
