import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuniaPage } from './dunia.page';

const routes: Routes = [
  {
    path: '',
    component: DuniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuniaPageRoutingModule {}
