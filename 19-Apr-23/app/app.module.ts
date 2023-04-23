import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestimonialComponent } from './page/testimonial/testimonial.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { MaterialModule } from './materials/materials.module';
import { FeedbackBoxComponent } from './page/testimonial/feedback-box/feedback-box.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './page/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    FeedbackBoxComponent,
    TestimonialComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
