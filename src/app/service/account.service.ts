import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  listItems: Item[] = [];
  listCategories: String[] = [
    "A Pagar",
    "A Receber"
  ]

  opened:boolean = false;
  total:number = 0;

  constructor(public cookie: CookieService) {

    // let item;
    // for (let i=0; i< 10; i++){
    //   item = new Item()
    //   item.label = "teste" + i;
    //   item.value = Math.round(Math.random() * 1000) - 500;



    //   this.listItems.push(item);
    // }

    let list = cookie.get("listFinancas");

    if (list){
      this.listItems = JSON.parse(list);
      this.updateTotal();
    }


  }

  addItem(item){
    this.listItems.push(item);
    this.updateTotal();
    this.cookie.set("listFinancas",JSON.stringify(this.listItems));
  }

  updateTotal(){
    this.total = this.listItems.reduce((a, b) => +a + +b.value, 0);
  }
}
