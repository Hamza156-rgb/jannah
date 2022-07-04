import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiddatPageRoutingModule } from './biddat-routing.module';

import { BiddatPage } from './biddat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiddatPageRoutingModule
  ],
  declarations: [BiddatPage]
})
export class BiddatPageModule {}
