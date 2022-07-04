import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QayamatPageRoutingModule } from './qayamat-routing.module';

import { QayamatPage } from './qayamat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QayamatPageRoutingModule
  ],
  declarations: [QayamatPage]
})
export class QayamatPageModule {}
