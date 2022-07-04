import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IkhlaqPageRoutingModule } from './ikhlaq-routing.module';

import { IkhlaqPage } from './ikhlaq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IkhlaqPageRoutingModule
  ],
  declarations: [IkhlaqPage]
})
export class IkhlaqPageModule {}
