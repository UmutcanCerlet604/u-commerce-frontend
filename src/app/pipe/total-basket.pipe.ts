import { Pipe, PipeTransform } from '@angular/core';
import { Basket } from '../model/basket';

@Pipe({
  name: 'totalBasket'
})
export class TotalBasketPipe implements PipeTransform {

  transform(basket:Basket[]): number {
    var total = 0;
    basket.forEach(basket => {
      total += basket.product.price * basket.quantity
    });
    return total;
  }

}
