import {Component, OnInit} from '@angular/core';
import {Course} from '../models/Course';
import {CourseService} from '../services/course.service';
import {Semester} from '../enums/Semester';
import {FilterService} from '../services/filter.service';
import {MatRadioChange} from '@angular/material';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  searchRate: number[];
  ects: number[];
  name: string;
  courseSemester: Semester[];
  p = 0;
  items = 3;
  constructor(private courseService: CourseService, private filterService: FilterService) {}

  getCourses(): void {
    this.courseService.getCourses();
    this.filterService.rating$.subscribe(x => {this.searchRate = x; });
    this.filterService.name$.subscribe(x => {this.name = x; });
    this.filterService.ectses$.subscribe(x => {this.ects = x; });
    this.filterService.semesters$.subscribe(x => {this.courseSemester = x; });
  }

  removeCourse(course: Course): void {
    this.courseService.removeCourse(course);
  }

  addCourse(course: Course): void {
    this.courseService.addCourse(course);
}

  ngOnInit(): void {
    this.getCourses();
  }

  paginate(i: number) {
    console.log(i);
    this.items = i;
  }
}
