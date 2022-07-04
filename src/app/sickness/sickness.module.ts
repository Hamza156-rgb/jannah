import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SicknessPageRoutingModule } from './sickness-routing.module';

import { SicknessPage } from './sickness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SicknessPageRoutingModule
  ],
  declarations: [SicknessPage]
})
export class SicknessPageModule {}
