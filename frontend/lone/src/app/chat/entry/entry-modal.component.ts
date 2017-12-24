import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'entry-modal-component',
  templateUrl: './entry-modal.component.html'
})

export class ChatEntryModalComponent {
  @Output() onRegistered = new EventEmitter<any>();

  constructor(public activeModal: NgbActiveModal) {}

  model = {};

  registerUser() {
    this.onRegistered.emit(this.model);
    this.activeModal.close('Close click');
  }
}
