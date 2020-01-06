import { Pipe, PipeTransform } from '@angular/core';
import {Course} from '../models/Course';

@Pipe({
  name: 'courseRatingFilter'
})
export class CourseRatingFilterPipe implements PipeTransform {

  transform(courses: Course[], searchRate: number): Course[] {
    if (!courses) { return []; }
    if (!searchRate) {return courses; }
    return courses.filter(course => Math.floor(course.rating.currentRating) === searchRate);
  }

}
