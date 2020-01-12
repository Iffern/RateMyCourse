import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Semester} from '../enums/Semester';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  name$ = new Subject<string>();
  rating$ = new Subject<number[]>();
  semesters$ = new Subject<Semester[]>();
  ectses$ = new Subject<number[]>();

  getName(name) {
    this.name$.next(name);
  }
  getRating(rate) {
    this.rating$.next(rate);
  }
  getSemesters(semesters) {
    this.semesters$.next(semesters);
  }
  getECTS(ects) {
    this.ectses$.next(ects);
  }
}
