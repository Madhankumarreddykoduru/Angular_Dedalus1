import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServiceBoxComponent } from './service-box/service-box.component';
import { Tiger1Component } from './tiger1/tiger1.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideviewComponent } from './slideview/slideview.component';
import { BusinessComponent } from './business/business.component';
import { ProductComponent } from './product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceBoxComponent,
    Tiger1Component,
    SlideviewComponent,
    BusinessComponent,
    ProductComponent,
  ],// specifies or includes all the components.pipes and directives which
  //are part of the module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],//services will be specified here
  bootstrap: [AppComponent] //root components
})
export class AppModule { }