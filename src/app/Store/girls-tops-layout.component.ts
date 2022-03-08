import { Component, Input } from "@angular/core";
import { girls_tops_list } from "./girls_tops_list";
import { ProductItemModel } from "./product-item-model";
import { StoreService } from "./store.service";

@Component({
    selector: 'hollister-girls-tops',
    templateUrl: 'girls-tops-layout.component.html'
})
export class GirlsTopsLayout{
    
    products: ProductItemModel[] = [];

    constructor(private girlstopsService:StoreService) {
    
    }
  
  
    ngOnInit(): void {
      this.girlstopsService.getGirlsTops().subscribe((data: ProductItemModel []) =>{
        console.log("Fetching girls tops informations");
        for(var product of data){
          console.log(product);
          this.products.push(product);
  
        }
      }) ;
    }
  
   
}