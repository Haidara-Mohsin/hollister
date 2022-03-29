//import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item-model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)
export class StoreService {
    // private baseUrl: string = "https://hollister-6d2fe-default-rtdb.firebaseio.com/";

    // private guysTopsEndPoint: string = "guys-tops.json";
    // private guysBottomsEndPoint: string = "guys-bottoms.json";
    // private girlsTopsEndPoint: string = "girls-tops.json";
    // private homeEndPoint: string = "home.json"



    constructor(private db:AngularFireDatabase ) {
    }
    getguysTops(){
        return this.db.list<ProductItemModel>("guys-tops").valueChanges();

    }
    getGuysBottoms(){
        return this.db.list<ProductItemModel>("guys-bottoms").valueChanges();

    }
    getGirlsTops(){
        return this.db.list<ProductItemModel>("girls-tops").valueChanges();


    }
    gethome(){

        return this.db.list<ProductItemModel>("home").valueChanges();

    }

    addGuysTops(product:ProductItemModel) {
        this.db.list<ProductItemModel>("guys-tops").push(product);
      }



}

