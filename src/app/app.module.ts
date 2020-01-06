import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import {NgbModule, NgbRating} from '@ng-bootstrap/ng-bootstrap';
import {RatingModule} from 'ng-starrating';
import { CourseAddComponent } from './course-add/course-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatSelectModule} from '@angular/material';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { CourseRatingFilterPipe } from './filters/course-rating-filter.pipe';
import { CourseNameFilterPipe } from './filters/course-name-filter.pipe';
import { CourseECTSFilterPipe } from './filters/course-ectsfilter.pipe';
import { CourseSemesterFilterPipe } from './filters/course-semester-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseListComponent,
    CourseAddComponent,
    ErrorMessageComponent,
    CourseRatingFilterPipe,
    CourseNameFilterPipe,
    CourseECTSFilterPipe,
    CourseSemesterFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RatingModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, NgbRating]
})
export class AppModule { }
