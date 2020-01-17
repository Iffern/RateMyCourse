import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {User} from '../models/User';
import {AuthenticationService} from './authentication.service';
import {userError} from '@angular/compiler-cli/src/transformers/util';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  adminPath = this.firestore.collection('admin');
  coursePath = this.firestore.collection('courses');

  constructor(private firestore: AngularFirestore) {
  }

  getAdmins() {
    let admins = [];
    this.firestore.collection('admin').get().subscribe(admin => {
      for (const elem of admin.docs) {
        admins.push(elem.get('email'));
      }
    });
    return admins;
  }

  getCourses() {
    let courses = [];
    this.firestore.collection('courses').get().subscribe(admin => {
      for (const elem of admin.docs) {
        courses.push({
          ECTS: elem.get('ects'),
          name: elem.get('name'),
          currentParticipants: elem.get('currentParticipants'),
          currentRating: elem.get('currentRating'),
          description: elem.get('description'),
          form: elem.get('form'),
          id: elem.get('id'),
          image: elem.get('image'),
          maxParticipants: elem.get('maxParticipants'),
          numberOfRates: elem.get('numberOfRates'),
          semester: elem.get('semester'),
          studentsEnrolled: elem.get('studentsEnrolled'),
          studentsVoted: elem.get('studentsVoted'),
          sumOfRates: elem.get('sumOfRates'),
          teacherLastname: elem.get('teacherLastname'),
          teacherName: elem.get('teacherName')
        });
      }
    });
    return courses;
  }
}
