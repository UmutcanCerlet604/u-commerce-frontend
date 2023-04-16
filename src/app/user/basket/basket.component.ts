import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Product } from 'src/app/model/product';
import { BasketService } from '../../services/basket/basket.service';
import { User } from '../../model/model';
import { Basket } from 'src/app/model/basket';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { CardService } from '../../services/card/card.service';
import { Card } from 'src/app/model/card';
import { OrderItemService } from '../../services/orderItem/order-item.service';
import { OrderItem } from 'src/app/model/orderItem';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
  styles: [`
      :host ::ng-deep .p-button {
          margin: 0 .5rem 0 0;
          min-width: 10rem;
      }

      p {
          margin: 0;
      }

      .confirmation-content {
          display: flex;
          align-items: center;
          justify-content: center;
      }

      :host ::ng-deep .p-dialog .p-button {
          min-width: 6rem;
      }
  `]
})
export class BasketComponent implements OnInit {

  product: Product
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  user: User
  basket: Basket[] = [];
  totalAmount: any
  displayBasic: boolean;
  card: Card = new Card;
  orderItem: OrderItem = new OrderItem;

  constructor(
    private basketService: BasketService,
    private authenticationService: AuthenticationService,
    private cardService: CardService,
    private orderItemService: OrderItemService
  ) { }

  ngOnInit(): void {
    this.user = this.authenticationService.getCurrentUser();
    this.getAllBasket();

  }

  getAllBasket() {
    this.basketService.getAllBasket(this.user).subscribe(res => {
      this.basket = res
      console.log(this.basket);
    })
  }

  deleteBasket(id: Number) {
    console.log(id);
    this.basketService.deleteBasket(id).subscribe(res => {
      this.getAllBasket();

    })
  }
  showBasicDialog() {
    this.displayBasic = true;
  }

  increase(id: Number) {
    this.basketService.increase(id).subscribe(res => {
      this.basket = res;
      console.log(res);

    })
  }

  decrease(id: Number) {
    this.basketService.decrease(id).subscribe(res => {
      this.basket = res;
      console.log(res);

    })
  }

  addCard() {
    this.cardService.addCard(this.card).subscribe(res => {
      console.log(res);
    })
  }

  addOrderItem() {
    this.orderItemService.addOrderItem(this.orderItem).subscribe(res => {
      console.log(res);
    })
  }


}
