import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SlideshowService} from '../services/slideshow.service';

@Component({
  selector: 'app-shop-section-view',
  templateUrl: './shop-section-view.component.html',
  styleUrls: ['./shop-section-view.component.less']
})
export class ShopSectionViewComponent implements OnInit {

  filter1: string = 'in';
  filter2: string = 'hf';
  constructor(private slideshowService: SlideshowService) { }

  ngOnInit() {
    this.slideshowService.setContentSlideshow(this.filter1, this.filter2);
  }




}
