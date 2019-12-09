
import {Observable, Subject} from 'rxjs';
import {Item} from '../models/item.model';
import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import ItemJson from '../../assets/items.json';
@Injectable()
export class ItemsService {

  private a: any[] = [];
  // private s: string = JSON.stringify(ItemJson);
  private items: Item[] = ItemJson;
  private filters: string[] = [];
  itemsSubject = new Subject<Item[]>() ;

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

  orderItemByPrice() {

    this.items.sort(function (a, b) {

      return a.price - b.price;

    });

  }
/*
  orderItemByRating() {
    this.items.sort((a,b) => a.sort(
      a.rate - b.rate //order by rate
    ));
  }

  orderItemByBrand() {
    this.items.sort((a,b) => a.sort(
      a.brand - b.brand //order by rate
    ));
  }
*/
  // Permet de filtrer l'affichage des produits, filtres cummulables
  filterItemsDisplay(filter: string) {
    //init en cas de cumulation de filtres
    this.items = ItemJson;
    // on met à jour les filtres actifs
    // si on reclique sur un filtre actif, celui-ci est retiré
    if (!(this.filters.indexOf(filter) > -1)) {
      this.filters.push(filter);
    } else {
      this.filters.splice( this.filters.indexOf(filter), 1);
    }
    console.log(this.filters);

    //si il n'y a aucun filtre
    if(this.filters.length === 0){
      this.emitItems();
    } else {
      const display = this.items.filter(item => (this.filters.indexOf(item.collection) > -1) );
      this.items = display;
      this.emitItems();
    }
  }

}
