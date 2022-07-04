import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IkhlaqPage } from './ikhlaq.page';

const routes: Routes = [
  {
    path: '',
    component: IkhlaqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IkhlaqPageRoutingModule {}
