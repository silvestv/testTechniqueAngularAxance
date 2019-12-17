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

  // Il y a deux tableaux ici à définir pour la view
  // nous avons donc 2 souscriptions à 1 seul est même service itemService
  // nous aurions pu avoir 2 services différents néanmoins le filtrage étant
  // intimement lié aux items il m'a paru judicieux de ne pas ajouter de la complexité inutilement

  items: Item[];
  filters: string[];
  itemsSubscription: Subscription;
  filtersSubscription: Subscription;
  filterShow = false;

  constructor(private itemsService: ItemsService) { }

  // Lors de l'initialisation du component
  // on s'abonne au serice item avec les 2 sujets
  // pour pouvoir observer et afficher les changement de données dans la vue
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

    // on fait émettre le service pour afficher les datas
    this.itemsService.emitItems();
    this.itemsService.emitfilters();
  }

  // permet d'afficher les filtres après le click du bouton filtre
  // si on reclique dessus ces derniers disparaîssent
  switchDisplayFilter() {
    this.filterShow = !this.filterShow;
  }

  // Cette fonction appelle le service permettant de trié les items
  // filterItemsDisplay encapsule l'émission des changement (emitFilter)
  // c'est pourquoi il est inutile de l'appeler
  filterItems(filter: string) {
    this.itemsService.filterItemsDisplay(filter);
  }

  // sortItems permet d'ordonné les items par prix, notation ou par marque
  // sinon on envoit une erreur
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
