import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: '', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
