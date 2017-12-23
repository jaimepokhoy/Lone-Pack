import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChatEntryModalComponent } from './entry/entry-modal.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages = [];

  constructor(private chat: ChatService, private modalService: NgbModal) { }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      this.messages.push(msg);
    })
    // this.openModal();
  }

  openModal() {
    const chatModal = this.modalService.open(ChatEntryModalComponent);
  }

  register() {
    const chatModal = this.modalService.open(ChatEntryModalComponent);
  }

  sendMessage(box) {
    this.chat.sendMsg(box.value);
    box.value = "";
  }

}
