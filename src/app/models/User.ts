import {Course} from './Course';

export class User {
  admin: boolean;
  coursesID: number[];
  email: string;
  username: string;
  constructor(admin: boolean, email: string, username: string, courses: number[]) {
    this.admin = admin;
    this.username = username;
    this.email = email;
    this.coursesID = courses;
  }
}
