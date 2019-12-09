import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {SlideshowService} from '../services/slideshow.service';
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

  constructor(private slideshowService: SlideshowService) { }

  ngOnInit() {
    //par défaut
    this.id = 'hf';
    this.filter = 'in';
    this.slideshowService.setContentSlideshow(this.filter, this.id);
  }


  setDisplaySlide(idpath: string) {
    this.id = idpath;
    this.slideshowService.setContentSlideshow(this.filter, this.id);

  }

  setDisplaySlideInOut(filter: string) {
    this.filter = filter;
    this.slideshowService.setContentSlideshow(this.filter, this.id);

  }


}
