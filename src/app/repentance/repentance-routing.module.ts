import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepentancePage } from './repentance.page';

const routes: Routes = [
  {
    path: '',
    component: RepentancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepentancePageRoutingModule {}
