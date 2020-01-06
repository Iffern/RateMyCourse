import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormOfCourse} from '../enums/FormOfCourse';
import {Semester} from '../enums/Semester';
import {CustomValidators} from '../validators/CustomValidators';
import {CourseComponent} from '../course/course.component';
import {Course} from '../models/Course';
import {Teacher} from '../models/Teacher';
import {CourseDescription} from '../models/Course-Description';
import {Rating} from '../models/Rating';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  @Output() courseAdded = new EventEmitter<Course>();

  courseForm: FormGroup;
  keys = Object.keys;
  forms = FormOfCourse;
  semesters = Semester;
  private course: Course;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      name: ['', Validators.required],
      ECTS: ['', [Validators.required, Validators.min(0), Validators.max(30), CustomValidators.numeric]],
      semester: ['', Validators.required],
      forms: ['', Validators.required],
      maxparticipants: ['', [Validators.required, Validators.min(0), CustomValidators.numeric]],
      teacherName: ['', Validators.required],
      teacherSurname: ['', Validators.required],
      description: '',
      logo: ['', Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]
    });
  }

  addCourse(): void {
    const teacher: Teacher = {firstname: this.courseForm.value.teacherName, lastname: this.courseForm.value.teacherSurname};
    const teachers: Teacher[] = [teacher];
    const descriptio: CourseDescription = {summary: this.courseForm.value.description, academicTeachers: teachers};
    const rate: Rating = {currentRating: 0, numberOfRates: 0, sumOfRates: 0};
    if (this.courseForm.value.logo == null || this.courseForm.value.logo === '') {
        this.course = {name: this.courseForm.value.name, ECTS: this.courseForm.value.ECTS, image:  'assets/img/default.png',
        description: descriptio, maxParticipants: this.courseForm.value.maxparticipants, semester: this.courseForm.value.semester,
        form: this.courseForm.value.form, rating: rate};
    } else {
      this.course = {name: this.courseForm.value.name, ECTS: this.courseForm.value.ECTS, image:  this.courseForm.value.logo,
    description: descriptio, maxParticipants: this.courseForm.value.maxparticipants, semester: this.courseForm.value.semester,
    form: this.courseForm.value.form, rating: rate}; }
    this.courseAdded.emit(this.course);
  }
}
