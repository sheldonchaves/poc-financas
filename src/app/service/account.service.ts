import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  opened:boolean = false;
  listItems: Item[] = [];

  total:number = 0;

  constructor() {

    // let item;
    // for (let i=0; i< 10; i++){
    //   item = new Item()
    //   item.label = "teste" + i;
    //   item.value = Math.round(Math.random() * 1000) - 500;



    //   this.listItems.push(item);
    // }

  }

  addItem(item){
    this.listItems.push(item);
    this.updateTotal();
  }

  updateTotal(){
    this.total = this.listItems.reduce((a, b) => +a + +b.value, 0);
  }
}
