import {Component, OnDestroy, OnInit} from '@angular/core';
import {IImage} from 'ng-simple-slideshow';
import {SlideshowService} from '../../services/slideshow.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.less']
})
export class SlideShowComponent implements OnInit, OnDestroy {
  imageUrlArray: IImage[];
  imageUrlArraySubscription: Subscription;


  constructor(private slideshowService: SlideshowService) {
  }

  //souscription au service slideshow pour afficher les items
  // en fonction d'un grand nombre de paramètre, filtre dans la shop-section
  ngOnInit() {
    this.imageUrlArraySubscription = this.slideshowService.contentSlideshowSubject.subscribe(
      (contentSlideShow: IImage[]) => {
        this.imageUrlArray = contentSlideShow;
      }
    );
    this.slideshowService.emitlistImagesSubject();
  }


  ngOnDestroy(): void {
    this.imageUrlArraySubscription.unsubscribe();
  }

}
