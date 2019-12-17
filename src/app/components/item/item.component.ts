import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {
  // chaque attribut sera initialisé par un parent qui boucle sur la liste des items en .json
  @Input() id: number;
  @Input() name: string;
  @Input() brand: string;
  @Input() price: number;
  @Input() collection: string;
  @Input() imgUrl: string;
  @Input() rate: number;
  @Input() popular: number;
  isHot = false;


  constructor() {
  }

  ngOnInit() {
    this.setHotMention();
  }
  // pour l'affichage de la mention Hot sur l'article dans popular section
  // valeur choisie totalement arbitraire et imaginée
  setHotMention() {
    if ( this.popular > 300 ) {
      this.isHot = true;
    }
  }

}
