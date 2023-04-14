 import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  @Input() content1:string=""
  @Input() content2:string=""
  @Input() content3:string=""
}
