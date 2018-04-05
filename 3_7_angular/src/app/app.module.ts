import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChannelComponent } from './channel/channel.component';
import { MessageFeedComponent } from './message-feed/message-feed.component';
import { MessageFormComponent } from './message-form/message-form.component';

import { ReversePipe } from './pipes/reverse.pipe';

import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    MessageFeedComponent,
    MessageFormComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
