import { Injectable } from '@angular/core';
import { CoursesMock } from '../mock/CoursesMock';
import { Course } from '../models/Course';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[];
  id$ = new BehaviorSubject<number>(null);
  constructor() { this.courses = CoursesMock.Courses; }
  getCourses(): Course[] {
    return this.courses;
  }
  getCourse(id: number): Course {
    for (const course of this.courses) {if (course.id === id) {return course; }}
  }
  addCourse(course: Course): void {
    this.courses.push(course);
  }
  removeCourse(course: Course): void {
    this.courses.splice(this.courses.indexOf(course), 1);
  }
  getDetails(id: number): void {
    this.id$.next(id);
  }
  getCourseID(): number {
    return this.courses.length + 2;
  }
}
