
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from '../app.component';
import {CourseService} from '../course.service';
import { RatingModule } from 'ng-starrating';


@NgModule({
  declarations: [],
  imports: [
     CommonModule, RatingModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class CourseModule {

}
