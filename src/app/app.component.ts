import { Component } from '@angular/core';
import { mock_product_list } from './Store/mock_product_list';
import { ProductItemModel } from './Store/product-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hollister';
  
}
