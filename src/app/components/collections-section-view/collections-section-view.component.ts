import {Component, OnDestroy, OnInit} from '@angular/core';
import {ItemsService} from '../../services/items.service';
import {Item} from '../../models/item.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-collections-section-view',
  templateUrl: './collections-section-view.component.html',
  styleUrls: ['./collections-section-view.component.less']
})
export class CollectionsSectionViewComponent implements OnInit, OnDestroy {

  itemsCollection: Item[];
  itemsCollectionSubscription: Subscription;
  constructor(private itemsService: ItemsService) { }

  // appel au service pour afficher les collections de manières dynamique
  // si un item appartient à une collection jamais vu, celle-ci se rajoutera
  ngOnInit() {
   this.itemsCollectionSubscription = this.itemsService.collectionSubject.subscribe(
      (collections: Item[]) => {
        this.itemsCollection = collections;
      });
   this.itemsService.collectionItem();
  }

  ngOnDestroy(): void {
    this.itemsCollectionSubscription.unsubscribe();
  }

}
