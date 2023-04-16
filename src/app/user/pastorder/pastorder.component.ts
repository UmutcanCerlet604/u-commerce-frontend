import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/model';
import { Order } from 'src/app/model/order';
import { OrderService } from '../../services/order/order.service';
import { OrderItem } from '../../model/orderItem';
import { animate, state, style, trigger, transition } from '@angular/animations';


@Component({
  selector: 'app-pastorder',
  templateUrl: './pastorder.component.html',
  styleUrls: ['./pastorder.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class PastorderComponent implements OnInit {

  user: User;
  orders: Order[] = new Array()
  orderItem: OrderItem[]


  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getAllOrder();
  }

  getAllOrder() {
    this.orderService.getAllOrder().subscribe(res => {
      this.orders = res;
      console.log(this.orders);
    })
  }

}
