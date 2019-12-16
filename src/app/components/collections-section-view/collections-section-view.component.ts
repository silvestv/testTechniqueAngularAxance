import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../../services/items.service";
import {Item} from "../../models/item.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-collections-section-view',
  templateUrl: './collections-section-view.component.html',
  styleUrls: ['./collections-section-view.component.less']
})
export class CollectionsSectionViewComponent implements OnInit {

  itemsCollection: Item[];
  itemsCollectionSubscription: Subscription;
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
   this.itemsCollectionSubscription = this.itemsService.collectionSubject.subscribe(
      (collections: Item[]) => {
        this.itemsCollection = collections;
      });
   this.itemsService.collectionItem();
  }

}
