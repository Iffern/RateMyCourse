import {CourseDescription} from './Course-Description';
import {Semester} from '../enums/Semester';
import {FormOfCourse} from '../enums/FormOfCourse';
import {Rating} from './Rating';


export interface Course {
  id: number;
  name: string;
  ECTS: number;
  semester: string;
  form: Array<string>;
  maxParticipants: number;
  currentParticipants: number;
  currentRating: number;
  sumOfRates: number;
  numberOfRates: number;
  description: string;
  teacherName: string;
  teacherLastname: string;
  image: string;
  studentsEnrolled: string[];
  studentsVoted: string[];
}
