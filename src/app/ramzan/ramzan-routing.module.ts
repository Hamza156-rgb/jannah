import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RamzanPage } from './ramzan.page';

const routes: Routes = [
  {
    path: '',
    component: RamzanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamzanPageRoutingModule {}
