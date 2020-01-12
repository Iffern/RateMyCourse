import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation-sidenav',
  templateUrl: './navigation-sidenav.component.html',
  styleUrls: ['./navigation-sidenav.component.css']
})
export class NavigationSidenavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
