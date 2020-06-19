import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DownloadComponent } from './download/download.component';
import { MoredetailComponent } from './moredetail/moredetail.component';


@NgModule({
  declarations: [BootstrapComponent, IntroductionComponent, DownloadComponent, MoredetailComponent],
  imports: [
    CommonModule,
    BootstrapRoutingModule
  ]
})
export class BootstrapModule { }
