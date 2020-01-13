import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FirestoreService} from '../services/firestore.service';
import {merge} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  adminForm: FormGroup;
  messegeAdd = '';
  messegeRem = '';

  constructor(private dbSer: FirestoreService, private formBuilder: FormBuilder, private auth: AuthenticationService) { this.createForm(); }
  createForm() {
    this.adminForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ]
    });
  }

  addAdmin(value) {
    this.dbSer.adminPath.doc(value.email).set({
      email: value.email
    }, {merge: true} );
    this.auth.Administration.push(value.email);
    this.messegeAdd = 'Dodano nowego administratora!';
  }

  removeAdmin(value) {
    this.dbSer.adminPath.doc(value.email).delete();
    this.auth.Administration.splice(this.auth.Administration.indexOf(value.email), 1);
    this.messegeRem = 'Usunięto administratora:' + value.email;
  }
}
