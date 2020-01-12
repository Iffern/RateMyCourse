import { Pipe, PipeTransform } from '@angular/core';
import {Course} from '../models/Course';

@Pipe({
  name: 'courseECTSFilter'
})
export class CourseECTSFilterPipe implements PipeTransform {

  transform(courses: Course[], ects: number[]): Course[] {
    if (!courses) { return []; }
    if (!ects) {return courses; }
    const newCourses: Course[] = [];
    for ( const ect of ects) {
      for (const course of courses) {
        if (course.ECTS === ect) {newCourses.push(course); }
      }
    }
    return newCourses;
  }

}
