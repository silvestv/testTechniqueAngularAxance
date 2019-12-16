import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ItemsService} from '../../services/items.service';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-product-listing-page-view',
  templateUrl: './product-listing-page-view.component.html',
  styleUrls: ['./product-listing-page-view.component.less']
})
export class ProductListingPageViewComponent implements OnInit {

  items: Item[];
  filters: string[];
  itemsSubscription: Subscription;
  filtersSubscription: Subscription;
  filterShow = false;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsSubscription = this.itemsService.itemsSubject.subscribe(
      (items: any[]) => {
        this.items = items;
      }
    );

    this.filtersSubscription = this.itemsService.filterSubject.subscribe(
      (filters: string[]) => {
        this.filters = filters;
      }
    );

    this.itemsService.emitItems();
    this.itemsService.emitfilters();
  }

  switchDisplayFilter() {
    this.filterShow = !this.filterShow;
  }
  filterItems(filter: string) {

    this.itemsService.filterItemsDisplay(filter);
    console.log(this.filters);

  }

  sortItems(sort: string) {
    if (sort === 'brand') {
      this.itemsService.orderItemByBrand();
    } else if (sort === 'rate') {
      this.itemsService.orderItemByRate();
    } else if (sort === 'price') {
      this.itemsService.orderItemByPrice();
    } else {
      throw new Error('Parameter sort is not valuable (brand, rate, price only)');
    }
  }

}
