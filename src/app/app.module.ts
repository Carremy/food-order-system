import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoodDetailsComponent } from './component/food-details/food-details.component';
import { SearchComponent } from './component/search/search.component';
import { HeaderComponent } from './component/header/header.component';
import { AddToCartComponent } from './component/add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodDetailsComponent,
    SearchComponent,
    HeaderComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
