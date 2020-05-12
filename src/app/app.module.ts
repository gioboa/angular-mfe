import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { FoodItemComponent } from './food-item/food-item.component';

@NgModule({
  declarations: [FoodItemComponent],
  imports: [BrowserModule],
  entryComponents: [FoodItemComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(FoodItemComponent, { injector });
    customElements.define('food-item', el);
  }
  ngDoBootstrap() {}
}
