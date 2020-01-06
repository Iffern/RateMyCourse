import { Pipe, PipeTransform } from '@angular/core';
import {Course} from '../models/Course';
import {Semester} from '../enums/Semester';

@Pipe({
  name: 'courseSemesterFilter'
})
export class CourseSemesterFilterPipe implements PipeTransform {

  transform(courses: Course[], semester: Semester): Course[] {
    if (!courses) { return []; }
    if (!semester) {return courses; }
    return courses.filter(course => course.semester === semester);
  }

}
