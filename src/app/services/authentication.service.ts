import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {User} from 'firebase';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {FirestoreService} from './firestore.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  Administration: string[];
  data: AngularFirestoreCollection<unknown>;
  constructor(public afAuth: AngularFireAuth, private dbSer: FirestoreService) {
    afAuth.authState.subscribe(au => {
      this.currentUser = !!au;
    });
    this.Administration = dbSer.getAdmins();
  }
  currentUser: boolean;

  isAdmin(): boolean {
    if (this.getCurrentUser() === null) {return false; } else {
      return this.Administration.includes(this.getCurrentUser().email); }
  }

  getCurrentUser(): User|null {
    return this.afAuth.auth.currentUser;
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then( userData => {userData.user.updateProfile({displayName: value.username}); } )
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
        this.currentUser = false;
        this.afAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }
}
