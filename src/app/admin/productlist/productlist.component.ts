import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { Product } from 'src/app/model/product';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  product: Product = new Product();
  productList: Product[] = new Array();
  submitted: boolean = false;
  productDialog: boolean = false;
  msgs: Message[] = [];

  constructor(
    private productService: ProductService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  )
  { }

  ngOnInit(): void {
    this.getProducts();

  }

  addProduct() {
    this.productService.addProduct(this.product).subscribe(res => {
      console.log(res);
      this.hideDialog();
      this.getProducts();
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe(res => {
      console.log(res);
      this.productList = res;
      console.log(this.productList);
    })
  }

  delete(id:number) {
    this.productService.delete(id).subscribe(res => {
      this.getProducts();
      this.messageService.add({severity:'success', summary:'Ürün Silindi', detail:'Ürün Başarıyla Silindi'})
    }, err => {
      this.messageService.add({severity:'error', summary:'Ürün Silinemedi', detail:'Ürün Silinirken Bir Hata Oluştu'})
    })
  }

  edit(product: Product) {
    this.product= {...product}
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  openNew() {
    this.submitted = false;
    this.productDialog = true;
  }

  confirm2(id: number) {
    this.confirmationService.confirm({
      message: 'Ürünü silmek istediğinize emin misiniz?',
      header: 'Ürün Siliniyor',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Evet',
      rejectLabel: 'Hayır',

      accept: () => {
        this.delete(id)
      },

      reject: () => {
        this.messageService.add({severity:'error', summary:'Ürün Silinemedi', detail:"Ürün Silinirken Hata Oluştu"})
      }
  });
}


}
