import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
productlist:any;
types:string[]=[
  "All",
  "Electronic",
  "Cosmetics",
  "Groceries"
]
selected:string="All"
formatLabel(value: number): string {
  if (value >= 1000) {
    return Math.round(value / 1000) + 'k';
  }

  return `${value}`;
}
   constructor(private hs:HomeService){
    this.hs.getProducts().subscribe(
      {
    next: (data:any)=>this.productlist=data,
    error: ()=> this.productlist = [] 
   }
   )
}
min:number=0;
max:number=3300;
}
