import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { OffersComponent } from './pages/offers/offers.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"my-accountt",component:MyAccountComponent},
  {path:"offers",component:OffersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
