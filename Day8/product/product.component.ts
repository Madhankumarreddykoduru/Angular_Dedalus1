import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() content4:string=""
  @Input() content5:string=""
  @Input() content6:string=""
  @Input() content7:string=""
  @Input() content10:string=""
  @Input() content9:string=""
  @Input() content8:string=""
}
