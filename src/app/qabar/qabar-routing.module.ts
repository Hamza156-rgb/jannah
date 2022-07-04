import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QabarPage } from './qabar.page';

const routes: Routes = [
  {
    path: '',
    component: QabarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QabarPageRoutingModule {}
