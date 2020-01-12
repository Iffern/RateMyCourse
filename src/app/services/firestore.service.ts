import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) { }

  async addUser(id: string, user: User) {
    return this.firestore.collection('users').doc(id).set(Object.assign({}, user));
  }
  getUsername(id: string) {
    const doc = this.firestore.collection('users').doc(id).snapshotChanges();
    return 'Ania';
  }
}
