import { Pipe, PipeTransform } from '@angular/core';
import {Course} from '../models/Course';
import {Semester} from '../enums/Semester';

@Pipe({
  name: 'courseSemesterFilter'
})
export class CourseSemesterFilterPipe implements PipeTransform {
  transform(courses: Course[], semesters: Semester[]): Course[] {
    if (!courses) { return []; }
    if (!semesters) {return courses; }
    const newCourses: Course[] = [];
    for ( const semester of semesters ) {
      for (const course of courses) {
        if (course.semester === semester) {newCourses.push(course); }
      }
    }
    return newCourses;
  }
  }
