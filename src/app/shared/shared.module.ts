import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { MainPageComponent } from './pages/main-page/main-page.component';
import { AddressesPageComponent } from './pages/addresses-page/addresses-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { OrderHistoryPageComponent } from './pages/order-history-page/order-history-page.component';
import { OrderStatusPageComponent } from './pages/order-status-page/order-status-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { FooterComponent } from './components/footer/footer.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageModule } from './pages/main-page/main-page.module';
import { BrowserModule } from '@angular/platform-browser';



const routes:Routes = [
  { path: '', component: MainPageComponent },
  { path: 'addresses', component: AddressesPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'catalog', component: CatalogPageComponent },
  { path: 'order-history', component: OrderHistoryPageComponent },
  { path: 'order-status', component: OrderStatusPageComponent },
  { path: 'admin', component: AdminPageComponent }
];

@NgModule({
  declarations: [
    MainPageComponent,
    AddressesPageComponent,
    CartPageComponent,
    CatalogPageComponent,
    OrderHistoryPageComponent,
    OrderStatusPageComponent,
    AdminPageComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MainPageModule,
    IonicModule.forRoot({}),
    RouterModule.forChild(routes)
  ],
  exports:[
    MainPageComponent,
    AddressesPageComponent,
    CartPageComponent,
    CatalogPageComponent,
    OrderHistoryPageComponent,
    OrderStatusPageComponent,
    AdminPageComponent,
    FooterComponent,
    NavbarComponent,
    RouterModule
  ]
})
export class SharedModule { }