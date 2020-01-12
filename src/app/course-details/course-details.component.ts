import { Component, OnInit } from '@angular/core';
import {Course} from '../models/Course';
import {CourseService} from '../services/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StarRatingComponent} from 'ng-starrating';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;

  constructor(private service: CourseService, private route: ActivatedRoute, private routed: Router) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if ( param) {
      const id = +param;
      this.course = this.service.getCourse(id);
    }
  }

    rating($event: { oldValue: number; newValue: number; starRating: StarRatingComponent }) {
      this.course.rating.sumOfRates  = this.course.rating.sumOfRates + $event.newValue;
      this.course.rating.numberOfRates = this.course.rating.numberOfRates + 1;
      this.course.rating.currentRating = this.course.rating.sumOfRates / this.course.rating.numberOfRates;
    }
}
