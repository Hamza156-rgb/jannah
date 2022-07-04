import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WuzuPageRoutingModule } from './wuzu-routing.module';

import { WuzuPage } from './wuzu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WuzuPageRoutingModule
  ],
  declarations: [WuzuPage]
})
export class WuzuPageModule {}
