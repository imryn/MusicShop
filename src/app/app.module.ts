import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CartInfoComponent } from './cart-info/cart-info.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import {  UserService } from './user.service';

import {  HttpClientModule, HttpClient} from '@angular/common/http';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    ProductsTableComponent,
    ProductInfoComponent,
    CartInfoComponent,
    MyCartComponent,
    ControlMessagesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
