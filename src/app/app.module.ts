import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RatingModule} from 'ng-starrating';
import { CourseAddComponent } from './course-add/course-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatButtonToggleModule, MatIconModule,
  MatInputModule,
  MatListModule, MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { CourseRatingFilterPipe } from './filters/course-rating-filter.pipe';
import { CourseNameFilterPipe } from './filters/course-name-filter.pipe';
import { CourseECTSFilterPipe } from './filters/course-ectsfilter.pipe';
import { CourseSemesterFilterPipe } from './filters/course-semester-filter.pipe';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseFilterComponent } from './course-filter/course-filter.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { NavigationSidenavComponent } from './navigation-sidenav/navigation-sidenav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AngularFireDatabaseModule} from '@angular/fire/database-deprecated';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { AdminComponent } from './admin/admin.component';
import {NgxPaginationModule} from 'ngx-pagination';

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
    CourseDetailsComponent,
    CourseFilterComponent,
    NavigationHeaderComponent,
    NavigationSidenavComponent,
    LoginComponent,
    RegisterComponent,
    CourseEditComponent,
    AdminComponent,
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
    FormsModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
