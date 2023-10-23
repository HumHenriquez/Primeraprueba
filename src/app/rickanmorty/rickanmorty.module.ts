import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RickanmortyPageRoutingModule } from './rickanmorty-routing.module';

import { RickanmortyPage } from './rickanmorty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RickanmortyPageRoutingModule
  ],
  declarations: [RickanmortyPage]
})
export class RickanmortyPageModule {}
