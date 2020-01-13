import { Component, OnInit } from '@angular/core';
import {Course} from '../models/Course';
import {CourseService} from '../services/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StarRatingComponent} from 'ng-starrating';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;
  errorMessege = '';

  constructor(private service: CourseService, private route: ActivatedRoute, private routed: Router, private auth: AuthenticationService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.course = this.service.getCourse(id);
    }
  }

  rating($event: { oldValue: number; newValue: number; starRating: StarRatingComponent }) {
    this.course.sumOfRates = this.course.sumOfRates + $event.newValue;
    this.course.numberOfRates = this.course.numberOfRates + 1;
    this.course.currentRating = this.course.sumOfRates / this.course.numberOfRates;
    this.course.studentsVoted.push(this.auth.getCurrentUser().email);
    this.service.courseRated(this.course);
  }

  isLogged() {
    return this.auth.currentUser;
  }

  enroll() {
    if (this.canEnroll()) {
      this.course.studentsEnrolled.push(this.auth.getCurrentUser().email);
      this.course.currentParticipants += 1;
      this.service.enrollment(this.course);
      this.errorMessege = 'Zostałeś zapisany na kurs!';
    }
  }

  isEnrolledAndNotVote() {
    return this.course.studentsEnrolled.includes(this.auth.getCurrentUser().email) &&
      !this.course.studentsVoted.includes(this.auth.getCurrentUser().email);
  }

  canEnroll(): boolean {
    if (this.course.currentParticipants + 1 > this.course.maxParticipants) {
        this.errorMessege = 'Nie ma już miejsc na ten kurs!';
        return false;
      }
    if (this.course.studentsEnrolled.includes(this.auth.getCurrentUser().email)) {
        this.errorMessege = 'Jesteś już zapisany na ten kurs!';
        return false;
      }
    return true;
    }
}
