import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {FirestoreService} from '../services/firestore.service';

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
    if (this.authSer.afAuth.auth.currentUser == null) { return true; } else {this.currentUser = this.authSer.afAuth.auth.currentUser;
                                                                             return false; }
  }

  getCurrentUsername() {
    const userID = this.authSer.afAuth.auth.currentUser.uid;
    return this.dbSer.getUsername(userID);
  }
}
