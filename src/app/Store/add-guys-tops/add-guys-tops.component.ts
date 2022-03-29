import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '../product-item-model';
import { StoreService } from '../store.service';

@Component({
  selector: 'hollidter-add-guys-tops',
  templateUrl: './add-guys-tops.component.html',
  styleUrls: ['./add-guys-tops.component.css']
})
export class AddGuysTopsComponent implements OnInit {

  constructor(private ss: StoreService) { }

  ngOnInit(): void {
  }

  addGuysTops(product:ProductItemModel){

    this.ss.addGuysTops(product);

  }

}
