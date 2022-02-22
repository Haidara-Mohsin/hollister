import { Component, Input } from "@angular/core";
import { girls_tops_list } from "./girls_tops_list";
import { ProductItemModel } from "./product-item-model";

@Component({
    selector: 'hollister-girls-tops',
    templateUrl: 'girls-tops-layout.component.html'
})
export class GirlsTopsLayout{
    
    products: ProductItemModel[] = [];

    constructor(){
      for(var product of girls_tops_list){
        console.log(product);
        this.products.push(product);
      }
    } 
}