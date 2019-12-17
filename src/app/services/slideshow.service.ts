import {IImage} from 'ng-simple-slideshow';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


@Injectable()
export class SlideshowService {

  // DATA SLIDESHOW de type IImage from 'ng-simple-slideshow'
  // Home furnishing indoor image

  private imagehfi1: IImage = {
    url:  '../../assets/images/slideshow/hf1.jpeg',
    caption: 'un beau canapé',
  };

  private imagehfi2: IImage = {
    url:  '../../assets/images/slideshow/hf2.jpg',
    caption: 'une belle table',
  };

  private imagehfi3: IImage = {
    url:  '../../assets/images/slideshow/hf3.jpeg',
    caption: 'un beau lit',
  };

  // home furnishing outdoor image
  private imagehfo1: IImage = {
    url:  '../../assets/images/slideshow/hfo1.jpg',
    caption: 'un beau banc',
  };

  private imagehfo2: IImage = {
    url:  '../../assets/images/slideshow/hfo2.jpeg',
    caption: 'une belle chaise',
  };

  private imagehfo3: IImage = {
    url:  '../../assets/images/slideshow/hfo3.jpg',
    caption: 'une belle chaise de camping',
  };

  // accessorie indoor image
  private imageai1: IImage = {
    url:  '../../assets/images/slideshow/accin1.jpeg',
    caption: 'un beau luminion',
  };

  private imageai2 = {
    url:  '../../assets/images/slideshow/accin2.jpg',
    caption: 'un beau portant',
  };

  // accessorie outdoor image
  private imageao1: IImage = {
    url:  '../../assets/images/slideshow/accou1.jpeg',
    caption: 'une belle grille',
  };

  private imageao2: IImage = {
    url:  '../../assets/images/slideshow/accou2.jpeg',
    caption: 'des beaux barbecue',
  };

  // sport image indoor
  private imagesi1: IImage = {
    url:  '../../assets/images/slideshow/sportin1.jpeg',
    caption: 'un beau vélo d\'intérieur',
  };

  private imagesi2: IImage = {
    url:  '../../assets/images/slideshow/sportin2.jpeg',
    caption: 'un beau billard',
  };

  // sport image outdoor
  private imageso1: IImage = {
    url:  '../../assets/images/slideshow/sportout1.jpeg',
    caption: 'des belles cages de foot',
  };


  private imageso2: IImage = {
    url:  '../../assets/images/slideshow/sportout2.jpeg',
    caption: 'une beau trampoline',
  };

  // clothes image indoor
  private imagecli1: IImage = {
    url:  '../../assets/images/slideshow/clothin1.jpeg',
    caption: 'un beau étendoire',
  };


  private imagecli2: IImage = {
    url:  '../../assets/images/slideshow/clothin2.jpg',
    caption: 'un beau porte-serviette',
  };

  // clothes image outdoor
  private imageclo1: IImage = {
    url:  '../../assets/images/slideshow/clothout1.jpg',
    caption: 'Un costume grenouille',
  };


  private imageclo2: IImage = {
    url:  '../../assets/images/slideshow/clothout2.jpeg',
    caption: 'une pub ajax',
  };

  // Serialization des datas
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

  private imageUrlArrayClothIn: IImage[] = [
    this.imagecli1,
    this.imagecli2
  ];

  private imageUrlArrayClothOut: IImage[] = [
    this.imageclo1,
    this.imageclo2
  ];




  ///////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////

  // web service

  private contentSlideshow: IImage[] = [];
  // manipulation des données sous design pattern observable
  contentSlideshowSubject = new Subject<IImage[]>();

  constructor() {}

  // emission à chaque chagement pour un abonnement d'un composant au sujet
  emitlistImagesSubject() {
      this.contentSlideshowSubject.next(this.contentSlideshow);

    }
    // setter selon les filtres
    setContentSlideshow(filter1: string, filter2: string) {
      if (filter1 === 'in') {
        if (filter2 === 'hf') {
          this.contentSlideshow = this.imageUrlArrayHFIn;
        } else if (filter2 === 'acc') {
          this.contentSlideshow = this.imageUrlArrayAccIn;
        } else if (filter2 === 'sp'){
          this.contentSlideshow = this.imageUrlArraySportIn;
        } else {
          this.contentSlideshow = this.imageUrlArrayClothIn;
        }
      } else {

        if (filter2 === 'hf') {
          this.contentSlideshow = this.imageUrlArrayHFOut;
        } else if (filter2 === 'acc') {
          this.contentSlideshow = this.imageUrlArrayAccOut;
        } else if (filter2 === 'sp') {
          this.contentSlideshow = this.imageUrlArraySportOut;
        } else {
          this.contentSlideshow = this.imageUrlArrayClothOut;
        }

      }
      this.emitlistImagesSubject();
    }

}
