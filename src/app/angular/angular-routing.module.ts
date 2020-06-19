import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { ComponentsComponent } from './components/components.component';
import { ModulesComponent } from './modules/modules.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplatesComponent } from './templates/templates.component';
import { DerectiveComponent } from './derective/derective.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutingComponent } from './routing/routing.component';
import { ServiceComponent } from './service/service.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { CLIPromptsComponent } from './cliprompts/cliprompts.component';
import { FormsComponent } from './forms/forms.component';
import { AnimationComponent } from './animation/animation.component';
import { MaterialsComponent } from './materials/materials.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DownloadComponent } from './download/download.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { PropertyComponent } from './property/property.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { FirstappComponent } from './firstapp/firstapp.component';
import { InstallationComponent } from './installation/installation.component';
import { MongoComponent } from './mongo/mongo.component';
import { MongoinstallComponent } from './mongoinstall/mongoinstall.component';
import { MongostartComponent } from './mongostart/mongostart.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { AuthguardComponent } from './authguard/authguard.component';
import { PostgresqlComponent } from './postgresql/postgresql.component';



const routes: Routes = [
  {path:'angular',component:AngularComponent,children:[
    {path:'introduction',component:IntroductionComponent},
    {path:'download',component:DownloadComponent},
    {path:'components',component:ComponentsComponent},
    {path:'modules',component:ModulesComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'eventbinding',component:EventbindingComponent},
    {path:'templates',component:TemplatesComponent},
    {path:'derective',component:DerectiveComponent},
    {path:'pipes',component:PipesComponent},
    {path:'routing',component:RoutingComponent},
    {path:'service',component:ServiceComponent},
    {path:'httpclient',component:HttpclientComponent},
    {path:'cliprompts',component:CLIPromptsComponent},
    {path:'forms',component:FormsComponent},
    {path:'httpclient',component:HttpclientComponent},
    {path:'animation',component:AnimationComponent},
    {path:'materials',component:MaterialsComponent},
    {path:'ngif',component:NgifComponent},
    {path:'ngfor',component:NgforComponent},
    {path:'ngswitch',component:NgswitchComponent},
    {path:'property',component:PropertyComponent},
    {path:'firstapp',component:FirstappComponent},
    {path:'installation',component:InstallationComponent},
    {path:'mongo',component:MongoComponent},
    {path:'mongoinstall',component:MongoinstallComponent},
    {path:'mongostart',component:MongostartComponent},
    {path:'nodejs',component:NodejsComponent},
    {path:'Authguard',component:AuthguardComponent},
    {path:'Postgresql',component:PostgresqlComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
