import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetstartedRoutingModule } from './getstarted-routing.module';
import { GetstartedComponent } from './getstarted/getstarted.component';


@NgModule({
  declarations: [GetstartedComponent],
  imports: [
    CommonModule,
    GetstartedRoutingModule
  ]
})
export class GetstartedModule { }
