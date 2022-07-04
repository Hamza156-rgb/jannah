import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WuzuPage } from './wuzu.page';

const routes: Routes = [
  {
    path: '',
    component: WuzuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WuzuPageRoutingModule {}
