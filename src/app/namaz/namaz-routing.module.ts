import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NamazPage } from './namaz.page';

const routes: Routes = [
  {
    path: '',
    component: NamazPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NamazPageRoutingModule {}
