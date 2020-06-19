import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengRoutingModule } from './primeng-routing.module';
import { PrimengComponent } from './primeng/primeng.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DownloadComponent } from './download/download.component';


@NgModule({
  declarations: [PrimengComponent, IntroductionComponent, DownloadComponent],
  imports: [
    CommonModule,
    PrimengRoutingModule
  ]
})
export class PrimengModule { }
