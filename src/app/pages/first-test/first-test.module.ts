import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstTestPageRoutingModule } from './first-test-routing.module';

import { FirstTestPage } from './first-test.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FirstTestPageRoutingModule
  ],
  declarations: [FirstTestPage]
})
export class FirstTestPageModule {}
