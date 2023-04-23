import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialComponent } from './page/testimonial/testimonial.component';
import { HomeComponent } from './page/home/home.component';
const routes: Routes = [
  {path:"",component: HomeComponent},
  {path: "testimonials",component:TestimonialComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
