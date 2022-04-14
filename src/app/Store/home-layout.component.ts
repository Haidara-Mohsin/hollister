import { Component } from "@angular/core";
import { mock_product_list } from "./mock_product_list";
import { ProductItemModel } from "./product-item-model";
import { StoreService } from "./store.service";

@Component({
    selector: 'hollister-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']


})
export class HomeLayoutComponent{
    products: ProductItemModel[] = [];

    constructor(private homeService:StoreService) {
    
    }
  
  
    ngOnInit(): void {
      this.homeService.gethome().subscribe((data: ProductItemModel []) =>{
        console.log("Fetching home informations");
        for(var product of data){
          console.log(product);
          this.products.push(product);
  
        }
      }) ;
    }

}