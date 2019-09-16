import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../prodct.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  @Input() productList: Product[];
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}
