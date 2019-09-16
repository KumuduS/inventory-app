import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'price-display',
  template: `<div class="price-display">
  \${{ price }}</div>`
  //templateUrl: './price-display.component.html',
  //styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {
  @Input() price: number;
  constructor() { }

  ngOnInit() {
  }

}
