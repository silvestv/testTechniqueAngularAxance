import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Item} from '../../models/item.model';
import {ItemsService} from '../../services/items.service';
import {Subscription} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-popular-section-view',
  templateUrl: './popular-section-view.component.html',
  styleUrls: ['./popular-section-view.component.less']
})
export class PopularSectionViewComponent implements OnInit, OnDestroy{
  itemsPopular: Item[] = [];
  itemsPopularSubscription: Subscription;
  innerWidth: any;
  constructor(private itemsService: ItemsService, private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.itemsPopularSubscription = this.itemsService.itemsSubject.subscribe(
      (items: any[]) => {
        this.itemsPopular = items;
      });

    // Utilisation d'un breakpointObserver pour changer le display du nombre d'items
    // il y en aura moins dans le caroussel qui sera affiché lorsque l'écran est de petite taille
    this.breakpointObserver.observe([ '(min-width: 579px)' ])
      .subscribe(state => {
        if (state.matches) {
          this.itemsService.popularItem('normal');
        } else {
          this.itemsService.popularItem('small');
        }
      });
  }

  ngOnDestroy(): void {
    this.itemsPopularSubscription.unsubscribe();
  }

}
