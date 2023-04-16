import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../model/product';
import { ActivatedRoute, Params } from '@angular/router';
import { CommentService } from '../../services/comment/comment.service';
import { Comment} from '../../model/comment'
import { AddbrandComponent } from '../../admin/addbrand/addbrand.component';
import { Basket } from 'src/app/model/basket';
import { User } from 'src/app/model/model';
import { BasketService } from '../../services/basket/basket.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  productList: Product[] = new Array();
  product: Product;
  productId: number;
  comment: Comment = new Comment();
  comments: Comment[] = [];
  basket: Basket = new Basket();
  user: User = new User();

  constructor(
    private primengConfig: PrimeNGConfig,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private commentService: CommentService,
    private basketService: BasketService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.productId = params['id'];
    })
    this.user = JSON.parse(localStorage.getItem("user"))

    this.primengConfig.ripple = true;
    this.findByProduct();
    this.getComments();

  }

  findByProduct() {
    this.productService.findByProduct(this.productId).subscribe(res => {
      this.product = res;
      console.log(res);
    })
  }

  addToBasket(product: Product) {
    console.log(product);
    this.basket.product= product
    this.basket.user = this.user
    console.log(this.basket);

    this.basketService.addToBasket(this.basket).subscribe(res => {
      this.basket = res;
      this.messageService.add({severity: 'success', summary: 'Başarılı', detail: product.name + " sepete eklendi."})
    })


  }

  addComment() {
    this.comment.product = this.product
    this.comment.user = this.user

    this.commentService.addComment(this.comment).subscribe(res => {
      console.log(res);
      this.getComments();
    })

  }

  getComments() {
    this.commentService.getComments(this.productId).subscribe(res => {
      console.log(res);
      this.comments = res

    })
  }
}
