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
  closeModal() {
    this.modalService.close(this.modalRef);
    // or this.modalRef.close();
  }

}
