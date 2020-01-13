import {Component, OnInit} from '@angular/core';
import {CourseService} from '../services/course.service';
import {Course} from '../models/Course';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../validators/CustomValidators';
import {MatSelect} from '@angular/material';
import {FormOfCourse} from '../enums/FormOfCourse';
import {Semester} from '../enums/Semester';
import {Teacher} from '../models/Teacher';
import {CourseDescription} from '../models/Course-Description';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  course: Course;
  courses: Course[];
  courseForm: FormGroup;
  keys = Object.keys;
  forms = [FormOfCourse.Project, FormOfCourse.Exercises, FormOfCourse.Lecture, FormOfCourse.Laboratory];
  semesters = Semester;
  editMessege = '';
  constructor(private service: CourseService, private formBuilder: FormBuilder) {
    this.courses = this.service.getCourses();
  }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      pickedName: ['', Validators.required],
      name: [''],
      ECTS: ['', [Validators.min(0), Validators.max(8), CustomValidators.numeric]],
      semester: [''],
      forms: [''],
      maxparticipants: ['', [Validators.min(0), CustomValidators.numeric]],
      teacherName: [''],
      teacherSurname: [''],
      description: '',
      logo: ['', Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]
    });
  }

  editCourse(pick: MatSelect) {
    this.course = this.service.getCourseByName(pick.value);
    if (this.courseForm.value.teacherName !== null && this.courseForm.value.teacherName !== '') {
      this.course.teacherName = this.courseForm.value.teacherName; }
    if (this.courseForm.value.teacherSurname !== null && this.courseForm.value.teacherSurname !== '') {
      this.course.teacherLastname = this.courseForm.value.teacherSurname; }
    if (this.courseForm.value.description !== null && this.courseForm.value.description !== '') {this.course.description
      = this.courseForm.value.description; }
    if (this.courseForm.value.ECTS !== null && this.courseForm.value.ECTS !== '') {this.course.ECTS = this.courseForm.value.ECTS; }
    if (this.courseForm.value.name !== null && this.courseForm.value.name !== '') {this.course.name = this.courseForm.value.name; }
    if (this.courseForm.value.semester !== null && this.courseForm.value.semester !== '') {this.course.semester
      = this.courseForm.value.semester; }
    if (this.courseForm.value.forms !== null && this.courseForm.value.forms !== ''  && this.courseForm.value.forms !== []) {
      this.course.form = this.courseForm.value.forms; }
    if (this.courseForm.value.maxparticipants !== null && this.courseForm.value.maxparticipants !== '') {this.course.maxParticipants
      = this.courseForm.value.maxparticipants; }
    if (this.courseForm.value.logo !== null && this.courseForm.value.logo !== '') {this.course.image
      = this.courseForm.value.logo; }
    this.service.editCourse(this.course);
    this.editMessege = 'Kurs został edytowany!';
    }
  }
