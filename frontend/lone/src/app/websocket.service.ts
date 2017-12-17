import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { environment } from '../environments/environment';

@Injectable()
export class WebsocketService {

  private socket;

  constructor() { }

  connect(): Rx.Subject<MessageEvent> {
    this.socket = io('http://localhost:3000');
    // this.socket = io(environment.ws_url);

    let observable = new Observable(observer => {
      this.socket.on('chat message', data => {
        observer.next(data);
      })
      return () => {
        this.socket.disconnect();
      };
    });

    let observer = {
      next: (data: Object) => {
        this.socket.emit('chat message', data);
      },
    };

    return Rx.Subject.create(observer, observable);
  }
}
