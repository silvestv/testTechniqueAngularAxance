import {Component, OnInit, ViewChild} from '@angular/core';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-popin-modal',
  templateUrl: './popin-modal.component.html',
  styleUrls: ['./popin-modal.component.less']
})
export class PopinModalComponent implements OnInit {

  @ViewChild('myModal', {static: false}) myModal;
  private modalRef;
  constructor(private modalService: ModalManager) {}

  ngOnInit() {
  }

  //cette méthode permet d'ouvrir un ngbModal selon des propriétés particulières
  // ! problème relevé !
  // la propriété backdropClass si définit à backdrop-default permet d'avoir un arrière plan grisé ergonomique
  // malheuresement, il y a un problème avec le z-index qui met la popin en arrière-plan
  // Ceci vient certainement du fait que la page soit encapsulée dans un mat-side-nav
  openModal() {
    this.modalRef = this.modalService.open(this.myModal, {
      size: 'lg',
      modalClass: 'mymodal',
      hideCloseButton: false,
      centered: true,
      backdrop: true,
      animation: true,
      keyboard: true,
      closeOnOutsideClick: true,
      backdropClass: 'none'
    });
  }
  //méthode par défaut utile en cas de button close
  /*
  closeModal() {
    this.modalService.close(this.modalRef);
    // or this.modalRef.close();
  }*/

}
