import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaroodPageRoutingModule } from './darood-routing.module';

import { DaroodPage } from './darood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaroodPageRoutingModule
  ],
  declarations: [DaroodPage]
})
export class DaroodPageModule {}
