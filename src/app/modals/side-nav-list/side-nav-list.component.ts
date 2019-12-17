import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router, RouterEvent, Scroll} from '@angular/router';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.less']
})
export class SideNavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();
  // @ts-ignore
  @ViewChild('collections') collections;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  // ce query selector permet de scroller jusqu'à l'ancre voulue lorqu'on clique sur un item
  // le clic sur item déclenche la fermeture de la side nav bar
  public onSidenavClose = (anchor: string) => {
    this.sidenavClose.emit();
    document.querySelector('anchor').scrollIntoView(true);

  }


}
