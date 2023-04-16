import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/model/product';
import { ProductService } from '../../services/product/product.service';
import { CategoryService } from '../../services/category/category.service';
import { Category } from 'src/app/model/category';
import { BrandService } from 'src/app/services/brand/brand.service';
import { Brand } from 'src/app/model/brand';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  providers: [MessageService,ProductService]
})
export class AddproductComponent implements OnInit {

  product: Product = new Product();
  categoryList: Category[] = new Array();
  brandList: Brand[] = new Array();
  selectedBrand: any;
  selectedCategory: any;


  constructor(
    private categoryService: CategoryService,
    private messageService: MessageService,
    private productService: ProductService,
    private brandService: BrandService
  ){}

  ngOnInit(): void {

    this.getAll();
    this.getAllBrand();
  }

  selected() {
    console.log(this.selectedBrand);
  }

  selectCategory() {
    console.log(this.selectedCategory);
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
  }

  addProduct() {
    console.log(this.product)
    this.product.price = Number(this.product.price)
    this.productService.addProduct(this.product).subscribe((res: any) => {
      console.log(res);
    })
  }

  getAll() {
    this.categoryService.getCategories().subscribe(res => {
      this.categoryList = res;
      console.log(this.categoryList);
    })
  }

  getAllBrand() {
    this.brandService.getBrands().subscribe(res => {
      this.brandList = res;
      console.log(this.brandList);
    })
  }




}
