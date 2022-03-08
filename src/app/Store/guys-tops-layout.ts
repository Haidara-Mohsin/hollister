import { Component, Input, OnInit } from "@angular/core";
import { ProductItemModel } from "./product-item-model";
import { StoreService } from "./store.service";

@Component({
  selector: 'hollister-guys-tops',
  templateUrl: 'guys-tops-layout.component.html',
  styleUrls: ['guys-tops-layout.component.css']
})
export class GuysTopsLayout implements OnInit {

  products: ProductItemModel[] = [];

  constructor(private guystopsService:StoreService) {
    
  }


  ngOnInit(): void {
    this.guystopsService.getguysTops().subscribe((data: ProductItemModel []) =>{
      console.log("Fetching guys tops informations");
      for(var product of data){
        console.log(product);
        this.products.push(product);

      }
    }) ;
  }


}