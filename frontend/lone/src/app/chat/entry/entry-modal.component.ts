import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'entry-modal-component',
  templateUrl: './entry-modal.component.html'
})

export class ChatEntryModalComponent {

  constructor(public activeModal: NgbActiveModal) {}

  model = {};

  registerUser() {
    console.log(this.model);
  }
}
