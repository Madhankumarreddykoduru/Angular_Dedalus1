import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-box',
  templateUrl: './home-box.component.html',
  styleUrls: ['./home-box.component.css']
})
export class HomeBoxComponent {
@Input() product:any;
}