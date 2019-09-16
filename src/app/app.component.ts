import { Component, EventEmitter } from '@angular/core';
import { Product } from './prodct.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'inventory-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'NICHEAT',
        'A nice black hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99),
      new Product(
        'NETOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running shoes'],
        109.99)
    ];
  }

  productWasSelected(prodct: Product): void {
    console.log('Product clicked: ', prodct);
  }
}
