import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-navigation-sidenav',
  templateUrl: './navigation-sidenav.component.html',
  styleUrls: ['./navigation-sidenav.component.css']
})
export class NavigationSidenavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  isAdmin(): boolean {
    return this.auth.isAdmin();
  }
}
