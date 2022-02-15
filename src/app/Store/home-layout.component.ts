import { Component } from "@angular/core";
import { mock_product_list } from "./mock_product_list";
import { ProductItemModel } from "./product-item-model";

@Component({
    selector: 'hollister-home-layout',
    templateUrl: 'home-layout.component.html'

})
export class HomeLayoutComponent{
    products: ProductItemModel[] = [];

  constructor(){
    for(var product of mock_product_list){
      console.log(product);
      this.products.push(product);
    }
  }

}