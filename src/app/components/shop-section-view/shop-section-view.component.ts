import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SlideshowService} from '../../services/slideshow.service';
import {stringify} from 'querystring';

// @ts-ignore
@Component({
  selector: 'app-shop-section-view',
  templateUrl: './shop-section-view.component.html',
  styleUrls: ['./shop-section-view.component.less']
})
export class ShopSectionViewComponent implements OnInit {
  id: string;
  filter: string;

  constructor(private slideshowService: SlideshowService, private route: ActivatedRoute) { }

  ngOnInit() {
    // par défaut
    // init des filtre in ou out et de l'id de route (optionnel) sur hf acc sp (home furniture, sport ...)
    const routeActive: string = this.route.snapshot.params.id;
    this.filter = 'in';
    if (routeActive === null || routeActive === undefined) {
      this.id = 'hf';
    } else {
      this.id = routeActive;
    }

    this.slideshowService.setContentSlideshow(this.filter, this.id);
  }


  // fait appel au service, change les items présentés dans le slideshow
  setDisplaySlide(idpath: string) {
    this.id = idpath;
    this.slideshowService.setContentSlideshow(this.filter, this.id);

  }

  // fait appel au service, change les items présentés dans le slideshow
  setDisplaySlideInOut(filter: string) {
    this.filter = filter;
    this.slideshowService.setContentSlideshow(this.filter, this.id);

  }


}
