import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {FirestoreService} from '../services/firestore.service';
import {User} from '../models/User';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.css']
})
export class NavigationHeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(public authSer: AuthenticationService, public dbSer: FirestoreService) { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  logOut() {
    this.authSer.doLogout();
  }

  ifLogged() {
    return !this.authSer.currentUser;
  }

  getCurrentUsername() {
    if (this.authSer.currentUser) {
   return this.authSer.afAuth.auth.currentUser.displayName; }
  }
}
