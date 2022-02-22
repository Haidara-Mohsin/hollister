import { Component, Input } from "@angular/core";
import { guys_tops_list } from "./guys_tops_list";
import { ProductItemModel } from "./product-item-model";

@Component({
    selector: 'hollister-guys-tops',
    templateUrl: 'guys-tops-layout.component.html',
    styleUrls: ['guys-tops-layout.component.css']
})
export class GuysTopsLayout{

   products: ProductItemModel[] = [];

    constructor(){
      for(var product of guys_tops_list){
        console.log(product);
        this.products.push(product);
      }
    } 
    

}