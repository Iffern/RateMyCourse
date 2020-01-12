import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Course} from '../models/Course';
import {UserTrackingService} from '@angular/fire/analytics';
import {AngularFirestore} from '@angular/fire/firestore';
import {FirestoreService} from './firestore.service';
import {User} from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(public afAuth: AngularFireAuth, public dbSer: FirestoreService) {
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then( async res => this.dbSer.addUser(res.user.uid, new User(false, value.email, value.username, null)))
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }
}
