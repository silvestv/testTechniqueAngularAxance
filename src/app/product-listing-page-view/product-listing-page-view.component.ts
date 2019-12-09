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

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsSubscription = this.itemsService.itemsSubject.subscribe(
      (items: any[]) => {
        this.items = items;
      }
    );
    this.itemsService.emitItems();
  }

  filterItems(filter: string) {
    this.itemsService.filterItemsDisplay(filter);
  }

}
