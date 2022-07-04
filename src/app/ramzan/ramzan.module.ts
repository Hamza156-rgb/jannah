import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RamzanPageRoutingModule } from './ramzan-routing.module';

import { RamzanPage } from './ramzan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RamzanPageRoutingModule
  ],
  declarations: [RamzanPage]
})
export class RamzanPageModule {}
