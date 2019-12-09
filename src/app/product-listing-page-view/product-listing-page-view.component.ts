import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ItemsService} from '../services/items.service';
import {Item} from '../models/item.model';

@Component({
  selector: 'app-product-listing-page-view',
  templateUrl: './product-listing-page-view.component.html',
  styleUrls: ['./product-listing-page-view.component.less']
})
export class ProductListingPageViewComponent implements OnInit {

  items: Item[];
  itemsSubscription: Subscription;
  filterShow = false;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsSubscription = this.itemsService.itemsSubject.subscribe(
      (items: any[]) => {
        this.items = items;
      }
    );
    console.log('la : '+this.itemsService.orderItemByPrice());
    this.itemsService.emitItems();
  }

  switchDisplayFilter(){
    this.filterShow = !this.filterShow;
  }
  filterItems(filter: string) {
    console.log(filter);
    this.itemsService.filterItemsDisplay(filter);
  }

}
