import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetstartedComponent } from './getstarted/getstarted/getstarted.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  {path:'',component:GetstartedComponent},
  {path:'aboutus',component:AboutUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
