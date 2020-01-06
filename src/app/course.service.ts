import { Injectable } from '@angular/core';
import { CoursesMock } from './mock/CoursesMock';
import { Course } from './models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[];
  constructor() { }
  getCourses(): void {
    this.courses = CoursesMock.Courses;
  }
  getCourse(course: Course): Course {
    return this.courses[this.courses.indexOf(course)];
  }
  addCourse(course: Course): void {
    this.courses.push(course);
  }
  removeCourse(course: Course): void {
    this.courses.splice(this.courses.indexOf(course), 1);
  }
  // rateCourse(course: Course, newValue: number) {
    // course.rating.numberOfRates = course.rating.numberOfRates + 1;
    // course.rating.sumOfRates = course.rating.sumOfRates + newValue;
    // course.rating.currentRating = course.rating.sumOfRates / course.rating.numberOfRates;
  // }
}
