import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SadqahPage } from './sadqah.page';

const routes: Routes = [
  {
    path: '',
    component: SadqahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SadqahPageRoutingModule {}
