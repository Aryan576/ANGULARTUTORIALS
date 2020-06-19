import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularModule } from './angular/angular.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { PrimengModule } from './primeng/primeng.module';
import { GetstartedModule } from './getstarted/getstarted.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  
    AboutUsComponent,
    PageNotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AngularModule,
    GetstartedModule,
    BootstrapModule,
    PrimengModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
