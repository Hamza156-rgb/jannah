import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NamazPageRoutingModule } from './namaz-routing.module';

import { NamazPage } from './namaz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NamazPageRoutingModule
  ],
  declarations: [NamazPage]
})
export class NamazPageModule {}
