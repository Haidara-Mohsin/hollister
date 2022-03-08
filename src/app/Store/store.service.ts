import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item-model";

@Injectable(
    {providedIn: 'root'}
)
export class StoreService {
    private baseUrl: string = "https://hollister-6d2fe-default-rtdb.firebaseio.com/";

    private guysTopsEndPoint: string = "guys-tops.json";
    private guysBottomsEndPoint: string = "guys-bottoms.json";
    private girlsTopsEndPoint: string = "girls-tops.json";
    private homeEndPoint: string = "home.json"


    constructor(private http: HttpClient) {
    }
    getguysTops(){
        return this.http.get<ProductItemModel []>(this.baseUrl + this.guysTopsEndPoint);
    }
    getGuysBottoms(){
        return this.http.get<ProductItemModel []>(this.baseUrl + this.guysBottomsEndPoint);

    }
    getGirlsTops(){
        return this.http.get<ProductItemModel []>(this.baseUrl + this.girlsTopsEndPoint);

    }
    gethome(){
        return this.http.get<ProductItemModel []>(this.baseUrl + this.homeEndPoint);

    }



}

