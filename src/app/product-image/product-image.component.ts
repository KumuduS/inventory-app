import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../prodct.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'product-image',
  template: `<img class="product-image" [src]="product.imageUrl">`
  //templateUrl: './product-image.component.html',
  //styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = "ui small image";
  constructor() { }

  ngOnInit() {
  }

}
