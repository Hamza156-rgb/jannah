import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QayamatPage } from './qayamat.page';

const routes: Routes = [
  {
    path: '',
    component: QayamatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QayamatPageRoutingModule {}
