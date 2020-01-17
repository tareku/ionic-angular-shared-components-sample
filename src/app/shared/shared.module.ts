import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FirstCustomComponentComponent } from './first-custom-component/first-custom-component.component';
import { SecondCustomComponentComponent } from './second-custom-component/second-custom-component.component';
import { CustomComponent } from './custom/custom.component';



@NgModule({
  declarations: [
    CustomComponent,
    FirstCustomComponentComponent,
    SecondCustomComponentComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CustomComponent,
    FirstCustomComponentComponent,
    SecondCustomComponentComponent
  ]
})
export class SharedModule { }
