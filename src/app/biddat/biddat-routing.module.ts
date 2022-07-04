import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiddatPage } from './biddat.page';

const routes: Routes = [
  {
    path: '',
    component: BiddatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiddatPageRoutingModule {}
