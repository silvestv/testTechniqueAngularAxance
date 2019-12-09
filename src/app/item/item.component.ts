import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() brand: string;
  @Input() price: number;
  @Input() collection: string;
  @Input() imgUrl: string;
  @Input() rate: number;


  constructor() { }

  ngOnInit() {
  }

}
