import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductReviewComponent } from './components/product-review/product-review.component';

const routes = [
  { path: 'category/:category_id/products', component: ProductPageComponent }
];


@NgModule({
  declarations: [ProductPageComponent, ProductReviewComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProductPageComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class ProductsModule { }
