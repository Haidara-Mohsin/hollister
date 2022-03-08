import { Component, Input } from "@angular/core";
import { guys_bottoms_list } from "./guys_bottoms_list";
import { ProductItemModel } from "./product-item-model";
import { StoreService } from "./store.service";

@Component({
    selector: 'hollister-guys-tops',
    templateUrl: 'guys-bottoms-layout.component.html',
 
})
export class GuysBottomsLayout{

    products: ProductItemModel[] = [];

    constructor(private guysbottomsService:StoreService) {
    
    }
  
  
    ngOnInit(): void {
      this.guysbottomsService.getGuysBottoms().subscribe((data: ProductItemModel []) =>{
        console.log("Fetching guys bottoms informations");
        for(var product of data){
          console.log(product);
          this.products.push(product);
  
        }
      }) ;
    }
  



}