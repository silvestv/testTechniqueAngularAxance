import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // sur le click du toogle on déclenche l'apparition de la sidenav de angular Material
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
