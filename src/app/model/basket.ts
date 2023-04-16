import { User } from "./model";
import { Product } from "./product";

export class Basket{
  id: number
  quantity: number
  user: User = new User();
  product: Product = new Product();

}
