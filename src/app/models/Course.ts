import {CourseDescription} from './Course-Description';
import {Semester} from '../enums/Semester';
import {FormOfCourse} from '../enums/FormOfCourse';
import {Rating} from './Rating';


export interface Course {
  id: number;
  name: string;
  ECTS: number;
  semester: Semester;
  form: Array<FormOfCourse>;
  maxParticipants: number;
  rating: Rating;
  description: CourseDescription;
  image: string;
}
