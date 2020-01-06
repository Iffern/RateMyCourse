import { Pipe, PipeTransform } from '@angular/core';
import {Course} from '../models/Course';

@Pipe({
  name: 'courseECTSFilter'
})
export class CourseECTSFilterPipe implements PipeTransform {

  transform(courses: Course[], ects: number): Course[] {
    if (!courses) { return []; }
    if (!ects) {return courses; }
    return courses.filter(course => course.ECTS === ects);
  }

}
