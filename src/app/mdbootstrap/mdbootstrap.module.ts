import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdbootstrapRoutingModule } from './mdbootstrap-routing.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { DownloadComponent } from './download/download.component';


@NgModule({
  declarations: [IntroductionComponent, DownloadComponent],
  imports: [
    CommonModule,
    MdbootstrapRoutingModule
  ]
})
export class MdbootstrapModule { }
