import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaroodPage } from './darood.page';

const routes: Routes = [
  {
    path: '',
    component: DaroodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaroodPageRoutingModule {}
