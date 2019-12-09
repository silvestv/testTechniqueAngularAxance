import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router, RouterEvent, Scroll} from '@angular/router';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.less']
})
export class SideNavListComponent implements OnInit, AfterViewInit {

  @Output() sidenavClose = new EventEmitter();
  // @ts-ignore
  @ViewChild('collections') collections;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  public onSidenavClose = (anchor: string) => {
    this.sidenavClose.emit();
    window.document.querySelector('anchor').scrollIntoView(true);
  }

  ngAfterViewInit(){

  }

}
