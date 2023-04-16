import { User } from "./model";
import { Product } from "./product";

export class Comment{
  id: number;
  productComment: string;
  rating: number;
  user: User = new User();
  product: Product = new Product();
}
