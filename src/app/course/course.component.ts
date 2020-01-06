import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Course} from '../models/Course';
import {StarRatingComponent} from 'ng-starrating';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('course') course: Course;
  @Output() courseDeleted = new EventEmitter<Course>();
  @Output() courseRated = new EventEmitter<{course: Course, newValue: number}>();

  ngOnInit(): void {
  }

  remove(): void {
    this.courseDeleted.emit(this.course);
  }

  rating($event: { oldValue: number; newValue: number; starRating: StarRatingComponent }) {
    this.course.rating.sumOfRates  = this.course.rating.sumOfRates + $event.newValue;
    this.course.rating.numberOfRates = this.course.rating.numberOfRates + 1;
    this.course.rating.currentRating = this.course.rating.sumOfRates / this.course.rating.numberOfRates;
  }
}
