import {Component, HostListener, OnInit} from '@angular/core';
import {Item} from '../../models/item.model';
import {ItemsService} from '../../services/items.service';
import {Subscription} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-popular-section-view',
  templateUrl: './popular-section-view.component.html',
  styleUrls: ['./popular-section-view.component.less']
})
export class PopularSectionViewComponent implements OnInit {
  itemsPopular: Item[] = [];
  itemsPopularSubscription: Subscription;
  innerWidth: any;
  constructor(private itemsService: ItemsService, private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.itemsPopularSubscription = this.itemsService.itemsSubject.subscribe(
      (items: any[]) => {
        this.itemsPopular = items;
      });
    this.breakpointObserver.observe([ '(min-width: 579px)' ])
      .subscribe(state => {
        if (state.matches) {
          this.itemsService.popularItem('normal');
        } else {
          this.itemsService.popularItem('small');
        }
      });
  }

}
