import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router, RouterEvent, Scroll} from '@angular/router';
import ItemJson from '../assets/items.json';
import {Item} from './models/item.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'test-axance-front-silvestre';

  constructor(private router: Router) {
  }
  ngOnInit(): void {
    /*console.log(JSON.stringify(ItemJson));
    const s = JSON.stringify(ItemJson);
    const i: Item[] = JSON.parse(s);
    console.log(i);*/
  }


}
