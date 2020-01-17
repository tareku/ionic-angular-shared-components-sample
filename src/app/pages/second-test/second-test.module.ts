import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondTestPageRoutingModule } from './second-test-routing.module';

import { SecondTestPage } from './second-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondTestPageRoutingModule
  ],
  declarations: [SecondTestPage]
})
export class SecondTestPageModule {}
