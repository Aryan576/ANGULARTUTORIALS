import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimengComponent } from './primeng/primeng.component';

import { DownloadComponent } from '../primeng/download/download.component';
import { MoredetailComponent } from '../bootstrap/moredetail/moredetail.component';
import { IntroductionComponent } from './introduction/introduction.component';


const routes: Routes = [
  {path:'primeng',component:PrimengComponent,children:[
    {path:'introductionprime',component:IntroductionComponent},
    
     
      {path:'download',component:DownloadComponent},
      {path:'moredetail',component:MoredetailComponent}  
  
     
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimengRoutingModule { }
