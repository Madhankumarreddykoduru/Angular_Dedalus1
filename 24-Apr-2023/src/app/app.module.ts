import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ShoMartComponent } from './sho-mart/sho-mart.component';
import { HomeComponent } from './pages/home/home.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { OffersComponent } from './pages/offers/offers.component';
import { HomeBoxComponent } from './pages/home/home-box/home-box.component';
import { HttpClientModule } from '@angular/common/http';
import { ProducttypePipe } from './pipes/producttype.pipe';
import { ComplaintFormComponent } from './pages/home/complaint-form/complaint-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PriceFilterPipe } from './pipes/price-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ShoMartComponent,
    HomeComponent,
    MyAccountComponent,
    OffersComponent,
    HomeBoxComponent,
    ProducttypePipe,
    ComplaintFormComponent,
    PriceFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
