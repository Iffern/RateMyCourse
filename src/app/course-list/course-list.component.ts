import {Component, OnInit} from '@angular/core';
import {Course} from '../models/Course';
import {CourseService} from '../course.service';
import {Semester} from '../enums/Semester';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  searchRate: number;
  ects: number;
  name: string;
  keys = [Semester.First, Semester.Second, Semester.Third, Semester.Fourth, Semester.Fifth, Semester.Sixth];
  rating = [0, 1, 2, 3, 4, 5];
  courseSemester: Semester;
  constructor(private courseService: CourseService) {}

  getCourses(): void {
    this.courseService.getCourses();
  }

  removeCourse(course: Course): void {
    this.courseService.removeCourse(course);
  }

  addCourse(course: Course): void {
    this.courseService.addCourse(course);
}

  ngOnInit(): void {
    this.getCourses();
  }

}
