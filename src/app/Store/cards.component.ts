import { Component, Input } from "@angular/core";

@Component({
    selector: 'hollister-cards',
    templateUrl: 'cards.component.html',
    styleUrls: ['cards.component.css']
})
export class CardComponent {
    @Input() img: string;
    @Input() price: number;
    @Input() name: string;

    constructor(){
        this.img = "";
        this.price = 0;
        this.name = "Missing Name";
    }

  

}

