import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ProductViewComponent } from './productview2/productview2.component';

//import 'zone.js/dist/zone';
//import '@webcomponents/custom-elements/src/native-shim';

@NgModule({
  declarations: [ProductViewComponent],
  imports: [BrowserModule],
  entryComponents: [ProductViewComponent]
})
export class ProductViewModule {
  constructor(private injector: Injector) {
    console.log('ProductViewModule.constructor : Creating and Defining CustomElement : ProductViewComponent');
    const productView = createCustomElement(ProductViewComponent, { injector });
    let existing = customElements.get('product-view2');
    console.log('existing=' + existing);
    customElements.define('product-view2', productView);
    console.log('customElements.define(product-view2) was successful...');
  }

  ngDoBootstrap() {}
}
