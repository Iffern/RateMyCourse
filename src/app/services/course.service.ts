import { Injectable } from '@angular/core';
import { Course } from '../models/Course';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {FirestoreService} from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[];
  id$ = new BehaviorSubject<number>(null);
  constructor(private dbSer: FirestoreService) { this.courses = this.dbSer.getCourses(); }
  getCourses(): Course[] {
    return this.courses;
  }
  getCourse(id: number): Course {
    for (const course of this.courses) {if (course.id === id) {return course; }}
  }
  addCourse(course: Course): void {
    this.dbSer.coursePath.doc(course.id.toString()).set(
      {
        name: course.name,
        currentParticipants: course.currentParticipants,
        currentRating: course.currentRating,
        description: course.description,
        form: course.form,
        id: course.id,
        image: course.image,
        maxParticipants: course.maxParticipants,
        numberOfRates: course.numberOfRates,
        semester: course.semester,
        studentsEnrolled: course.studentsEnrolled,
        studentsVoted: course.studentsVoted,
        sumOfRates: course.sumOfRates,
        teacherLastname: course.teacherLastname,
        teacherName: course.teacherName
      }, {merge: true}
    );
    this.courses.push(course);
  }
  removeCourse(course: Course): void {
    this.dbSer.coursePath.doc(course.id.toString()).delete();
    this.courses.splice(this.courses.indexOf(course), 1);
  }
  editCourse(course: Course): void {
    this.dbSer.coursePath.doc(course.id.toString()).update({
      name: course.name,
      description: course.description,
      form: course.form,
      image: course.image,
      maxParticipants: course.maxParticipants,
      semester: course.semester,
      teacherLastname: course.teacherLastname,
      teacherName: course.teacherName
      }
    );
  }
  courseRated(course: Course): void {
    this.dbSer.coursePath.doc(course.id.toString()).update({
      currentRating: course.currentRating,
      numberOfRates: course.numberOfRates,
      studentsVoted: course.studentsVoted,
      sumOfRates: course.sumOfRates
      }
    );
  }
  enrollment(course: Course): void {
    this.dbSer.coursePath.doc(course.id.toString()).update({
      currentParticipants: course.currentParticipants,
      studentsEnrolled: course.studentsEnrolled
      }
    );
  }
  getDetails(id: number): void {
    this.id$.next(id);
  }
  getCourseID(): number {
    if (this.courses.length === 0) {return 0; } else { return this.courses[this.courses.length - 1].id + 1; }
  }

  getCourseByName(name: string): Course {
    for (const course of this.courses) {if (course.name === name) {return course; }}
  }
}
