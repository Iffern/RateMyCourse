import { Component, OnInit } from '@angular/core';
import {Semester} from '../enums/Semester';
import {FilterService} from '../services/filter.service';

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.css']
})
export class CourseFilterComponent implements OnInit {
  searchRate: number;
  ects: number;
  name: string;
  keys = [Semester.First, Semester.Second, Semester.Third, Semester.Fourth, Semester.Fifth, Semester.Sixth];
  rating = [0, 1, 2, 3, 4, 5];
  courseSemester: Semester;
  allects = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private filterService: FilterService) { }

  ngOnInit() {
  }

}
