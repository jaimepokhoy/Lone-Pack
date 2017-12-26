import { Component, OnInit, EventEmitter } from '@angular/core';
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
  username = "";
  color = "";
  registered = 'false';

  constructor(private chat: ChatService, private modalService: NgbModal) { }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      this.messages.push(msg);
    });

    localStorage.removeItem('registered');
  }

  openRegisterModal() {
    const chatModal = this.modalService.open(ChatEntryModalComponent);
    chatModal.componentInstance.onRegistered.subscribe(userData => {
      this.registerUser(userData);
    });
  }

  registerUser(userData) {
    this.username = userData.username;
    this.color = userData.textColor === 'red' ? '#873737' : '#5990ea';

    localStorage.setItem('registered', 'true');
    this.registered = 'true';
  }

  sendMessage(box) {
    const { username, color } = this;
    const text = box.value;

    const msgData = {
      username,
      color,
      text
    };

    this.chat.sendMsg(msgData);
    box.value = "";
  }

}
