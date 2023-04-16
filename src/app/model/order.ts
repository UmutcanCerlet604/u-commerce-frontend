import { User } from "./model";
import { OrderItem } from './orderItem';

export class Order{
  id?: number;
  date?: Date;
  user?: User = new User();
  orderItemDTOS?: OrderItem[] = new Array();
}
