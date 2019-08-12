import { Component, OnInit } from '@angular/core';
import { AccountService } from './service/account.service';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  item:Item = new Item();

  constructor(private service:AccountService) { }

  ngOnInit() {
  }

  addNew(){
    this.service.addItem(this.item);
    this.service.opened = false;
    this.item = new Item();
  }

}
