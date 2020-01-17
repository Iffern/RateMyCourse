import { Pipe, PipeTransform } from '@angular/core';
import {Course} from '../models/Course';

@Pipe({
  name: 'courseRatingFilter'
})
export class CourseRatingFilterPipe implements PipeTransform {

  transform(courses: Course[], searchRate: number[]): Course[] {
    if (!courses) { return []; }
    if (!searchRate) {return courses; }
    const newCourses: Course[] = [];
    for ( const rate of searchRate ) {
      for (const course of courses) {
        if (Math.floor(course.currentRating) === rate) {newCourses.push(course); }
      }
    }
    return newCourses;
  }

}
