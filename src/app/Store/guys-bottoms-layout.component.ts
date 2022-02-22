import { Component, Input } from "@angular/core";
import { guys_bottoms_list } from "./guys_bottoms_list";
import { ProductItemModel } from "./product-item-model";

@Component({
    selector: 'hollister-guys-tops',
    templateUrl: 'guys-bottoms-layout.component.html',
 
})
export class GuysBottomsLayout{

    products: ProductItemModel[] = [];

    constructor(){
      for(var product of guys_bottoms_list){
        console.log(product);
        this.products.push(product);
      }
    } 

}