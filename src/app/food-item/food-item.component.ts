import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-food-item',
  template: `
    <p>
      food-item works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class FoodItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
