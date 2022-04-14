import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '../Store/product-item-model';
import { StoreService } from '../Store/store.service';

@Component({
  selector: 'hollister-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

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
