import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QabarPageRoutingModule } from './qabar-routing.module';

import { QabarPage } from './qabar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QabarPageRoutingModule
  ],
  declarations: [QabarPage]
})
export class QabarPageModule {}
