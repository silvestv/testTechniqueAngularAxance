import {IImage} from 'ng-simple-slideshow';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


@Injectable()
export class SlideshowService {

  // DATA SLIDESHOW
  // Home furnishing indoor image

  private imagehfi1: IImage = {
    url:  '../../assets/images/hf1.jpeg',
    caption: 'un beau canapé',
  };

  private imagehfi2: IImage = {
    url:  '../../assets/images/hf2.jpg',
    caption: 'un beau bureau',
  };

  private imagehfi3: IImage = {
    url:  '../../assets/images/hf3.jpeg',
    caption: 'un beau lit',
  };

  // home furnishing outdoor image
  private imagehfo1: IImage = {
    url:  '../../assets/images/hf1.jpeg',
    caption: 'un beau canapé',
  };

  private imagehfo2: IImage = {
    url:  '../../assets/images/hf2.jpg',
    caption: 'un beau bureau',
  };

  private imagehfo3: IImage = {
    url:  '../../assets/images/hf3.jpeg',
    caption: 'un beau lit',
  };

  // accessorie indoor image
  private imageai1: IImage = {
    url:  '../../assets/images/hf1.jpeg',
    caption: 'un beau canapé',
  };

  private imageai2 = {
    url:  '../../assets/images/hf2.jpg',
    caption: 'un beau bureau',
  };

  // accessorie outdoor image
  private imageao1: IImage = {
    url:  '../../assets/images/hf3.jpeg',
    caption: 'un beau lit',
  };

  private imageao2: IImage = {
    url:  '../../assets/images/hf1.jpeg',
    caption: 'un beau canapé',
  };

  // sport image indoor
  private imagesi1: IImage = {
    url:  '../../assets/images/hf2.jpg',
    caption: 'un beau bureau',
  };

  private imagesi2: IImage = {
    url:  '../../assets/images/hf2.jpg',
    caption: 'un beau bureau',
  };

  // sport image outdoor
  private imageso1: IImage = {
    url:  '../../assets/images/hf3.jpeg',
    caption: 'un beau lit',
  };


  private imageso2: IImage = {
    url:  '../../assets/images/hf3.jpeg',
    caption: 'un beau lit',
  };

  //Serialization des datas
  private imageUrlArrayHFIn: IImage[] = [
    this.imagehfi1,
    this.imagehfi2,
    this.imagehfi3
  ];

  private imageUrlArrayHFOut: IImage[] = [
    this.imagehfo1,
    this.imagehfo2,
    this.imagehfo3
  ];

  private imageUrlArrayAccIn: IImage[] = [
    this.imageai1,
    this.imageai2
  ];

  private imageUrlArrayAccOut: IImage[] = [
    this.imageao1,
    this.imageao2
  ];

  private imageUrlArraySportIn: IImage[] = [
    this.imagesi1,
    this.imagesi2
  ];

  private imageUrlArraySportOut: IImage[] = [
    this.imageso1,
    this.imageso2
  ];


  //web service
  private contentSlideshow: IImage[] = []
  //manipulation des données sous design pattern observable
  contentSlideshowSubject = new Subject<IImage[]>();

  constructor() {}

  //emission à chaque chagement pour un abonnement d'un composant au sujet
  emitlistImagesSubject() {
      this.contentSlideshowSubject.next(this.contentSlideshow);

    }
    //setter selon les filtres
    setContentSlideshow(filter1: string, filter2: string) {
      if (filter1 === 'in') {
        if (filter2 === 'hf') {
          this.contentSlideshow = this.imageUrlArrayHFIn;
        } else if (filter2 === 'acc') {
          this.contentSlideshow = this.imageUrlArrayAccIn;
        } else {
          this.contentSlideshow = this.imageUrlArraySportIn;
        }
      } else {

        if (filter2 === 'hf') {
          this.contentSlideshow = this.imageUrlArrayHFOut;
        } else if (filter2 === 'acc') {
          this.contentSlideshow = this.imageUrlArrayAccOut;
        } else {
          this.contentSlideshow = this.imageUrlArraySportOut;
        }

      }
      this.emitlistImagesSubject();
    }

}
