import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelComponent } from './channel/channel.component';

const routes: Routes = [
  {
    path: 'channels/:name',
    component: ChannelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
