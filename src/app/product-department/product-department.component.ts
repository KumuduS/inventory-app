import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../prodct.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent implements OnInit {

  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
