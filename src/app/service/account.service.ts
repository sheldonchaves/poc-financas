import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  opened:boolean = false;
  listItems: Item[] = [];

  constructor() {
    let item;
    for (let i=0; i< 10; i++){
      item = new Item()
      item.label = "teste" + i;
      item.value = Math.round(Math.random() * 1000) - 500;



      this.listItems.push(item);
    }
  }
}
