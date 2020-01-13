import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Course} from '../models/Course';
import {Router} from '@angular/router';
import {CourseService} from '../services/course.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('course') course: Course;
  @Output() courseDeleted = new EventEmitter<Course>();
  @Output() courseRated = new EventEmitter<{course: Course, newValue: number}>();

  constructor(private router: Router, private service: CourseService, private auSer: AuthenticationService) {}

  ngOnInit(): void {
  }

  remove(): void {
    this.courseDeleted.emit(this.course);
  }
  details(id: number): void {
    this.service.getDetails(id);
    this.router.navigate(['course-details', id]);
  }

  isAdmin() {
    return this.auSer.isAdmin();
  }
}
