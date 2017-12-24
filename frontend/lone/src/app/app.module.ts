import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';

import { ChatService } from './chat.service';
import { WebsocketService } from './websocket.service';

import { ChatEntryModalComponent } from './chat/entry/entry-modal.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: '', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HomeComponent,
    ChatEntryModalComponent
  ],
  entryComponents: [
    ChatEntryModalComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [ ChatService, WebsocketService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
