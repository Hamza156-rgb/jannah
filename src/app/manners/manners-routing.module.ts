import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MannersPage } from './manners.page';

const routes: Routes = [
  {
    path: '',
    component: MannersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MannersPageRoutingModule {}
