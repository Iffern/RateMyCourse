import { Pipe, PipeTransform } from '@angular/core';
import {Course} from '../models/Course';

@Pipe({
  name: 'courseNameFilter'
})
export class CourseNameFilterPipe implements PipeTransform {

  transform(courses: Course[], name: string): Course[] {
    if (!courses) { return []; }
    if (!name) {return courses; }
    name = name.toLowerCase();
    return courses.filter(course => course.name.toLowerCase().includes(name));
  }

}
