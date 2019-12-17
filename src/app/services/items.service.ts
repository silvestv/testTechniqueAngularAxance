
import {Observable, Subject} from 'rxjs';
import {Item} from '../models/item.model';
import {HostListener, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import ItemJson from '../../assets/items.json';
@Injectable()
export class ItemsService {

  // Les items pour la page product & la section popular
  private items: Item[] = ItemJson;
  private  collections: Item[] = [];
  private filters: string[] = [];
  itemsSubject = new Subject<Item[]>() ;
  filterSubject = new Subject<string[]>();
  collectionSubject = new Subject<Item[]>();


  // selon les versions d'angular on peut avoir le besoin de passer par HTTPClient
/*
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {

      for (let i = 0; i <= data.length; i++ ) {
        this.items.push(data[i]);
      }
      console.log(this.items);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('../../assets/items.json');
  }

 */


  emitItems() {
    this.itemsSubject.next(this.items.slice());
  }

  emitCollections() {
    this.collectionSubject.next(this.collections.slice());
  }

  emitfilters() {
    this.filterSubject.next(this.filters.slice());
  }

  orderItemByPrice() {
    this.items.sort(function(a, b) {
      return a.price - b.price; // order by price asc
    });
    this.emitItems();
  }


  orderItemByRate() {
    this.items.sort(function(a, b) {
      return b.rate - a.rate; // order by rate desc
    });
    this.emitItems();
  }


  orderItemByBrand() {
    // order by brand (string traitement) asc
    this.items.sort(function(a, b) {
      if (a.brand < b.brand) {
        return -1;
      } else if (a.brand > b.brand) {
        return 1;
      } else {
        return 0;
      }
    });
    this.emitItems();
  }

  // Permet de filtrer l'affichage des produits, filtres cummulables
  filterItemsDisplay(filter: string) {
    // init en cas de cumulation de filtres
    this.items = ItemJson;
    // on met à jour les filtres actifs
    // si on reclique sur un filtre actif, celui-ci est retiré
    if (!(this.filters.indexOf(filter) > -1)) {
      this.filters.push(filter);
    } else {
      this.filters.splice( this.filters.indexOf(filter), 1);
    }

    // si il n'y a aucun filtre
    if (this.filters.length === 0) {
      this.emitItems();
    } else {
      const display = this.items.filter(item => (this.filters.indexOf(item.collection) > -1) );
      this.items = display;
      this.emitItems();
      console.log('la' + this.filters);
    }
    this.emitfilters();
  }


  popularItem(widthScreen?) {
    // on selectionne les 8 items les plus populaire (les plus achetés)
    this.items.sort((a, b) => (
      b.popular - a.popular
    ));

    // Si la taille de l'écran n'est pas small
    // alors on affiche tout les items par ordre de popularité
    // sinon on en affiche 6 qu'on rangera dans un carrousel pour des raisons ergonomiques
    if (widthScreen === 'normal') {
      this.itemsSubject.next(this.items.slice(0, 10));
    } else {
      this.itemsSubject.next(this.items.slice(0, 6));
    }
  }

  // renvoie un array d'item porte-étendard d'une collection de manière dynamique
  collectionItem(widthScreen?) {
    const displayCollection: Item[] = [];
    for (const item of this.items) {
      if (displayCollection.length === 0) {
        displayCollection.push(item);
      } else {
        // si on trouve que la collection de l'objet item courant
        // n'existe pas dans la displayCollection
        if (displayCollection.find(valueExisting => valueExisting.collection === item.collection) === undefined) {
          displayCollection.push(item);
        }
      }
    }
    this.collections = displayCollection;
    this.emitCollections();
  }

}
