import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepentancePageRoutingModule } from './repentance-routing.module';

import { RepentancePage } from './repentance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepentancePageRoutingModule
  ],
  declarations: [RepentancePage]
})
export class RepentancePageModule {}
