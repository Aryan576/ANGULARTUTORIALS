import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular/angular.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ModulesComponent } from './modules/modules.component';
import { ComponentsComponent } from './components/components.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplatesComponent } from './templates/templates.component';
import { DerectiveComponent } from './derective/derective.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServiceComponent } from './service/service.component';

import { CLIPromptsComponent } from './cliprompts/cliprompts.component';
import { FormsComponent } from './forms/forms.component';
import { AnimationComponent } from './animation/animation.component';
import { MaterialsComponent } from './materials/materials.component';
import { RoutingComponent } from './routing/routing.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { DownloadComponent } from './download/download.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { PropertyComponent } from './property/property.component';
import { FirstappComponent } from './firstapp/firstapp.component';
import { InstallationComponent } from './installation/installation.component';
import { MongoComponent } from './mongo/mongo.component';
import { MongoinstallComponent } from './mongoinstall/mongoinstall.component';
import { MongostartComponent } from './mongostart/mongostart.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { AuthguardComponent } from './authguard/authguard.component';
import { PostgresqlComponent } from './postgresql/postgresql.component';


@NgModule({
  declarations: [AngularComponent, DatabindingComponent, ModulesComponent, ComponentsComponent, EventbindingComponent, TemplatesComponent, DerectiveComponent, PipesComponent, ServiceComponent,  CLIPromptsComponent, FormsComponent, AnimationComponent, MaterialsComponent, RoutingComponent, HttpclientComponent, DownloadComponent, IntroductionComponent, NgifComponent, NgforComponent, NgswitchComponent, PropertyComponent, FirstappComponent, InstallationComponent, MongoComponent, MongoinstallComponent, MongostartComponent, NodejsComponent, AuthguardComponent, PostgresqlComponent],
  imports: [
    CommonModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }
