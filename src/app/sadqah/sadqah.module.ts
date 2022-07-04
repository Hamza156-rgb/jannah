import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SadqahPageRoutingModule } from './sadqah-routing.module';

import { SadqahPage } from './sadqah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SadqahPageRoutingModule
  ],
  declarations: [SadqahPage]
})
export class SadqahPageModule {}
