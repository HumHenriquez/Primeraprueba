import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RickanmortyPage } from './rickanmorty.page';

const routes: Routes = [
  {
    path: '',
    component: RickanmortyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RickanmortyPageRoutingModule {}
