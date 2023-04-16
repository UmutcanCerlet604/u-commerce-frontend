import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/model/brand';
import { Category } from 'src/app/model/category';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product/product.service';
import { Basket } from 'src/app/model/basket';
import { User } from 'src/app/model/model';
import { MessageService } from 'primeng/api';
import { BasketService } from '../../services/basket/basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categoryList: Category[] = new Array();
  brandList: Brand[] = new Array();
  productList: Product[] = new Array();
  productListt: Product[] = new Array();
  basket: Basket = new Basket();
  user: User = new User();
  selectedBrand: any;
  selectedCategory: any;
  categoryFilter: Product[] = null;
  product: any;

  constructor(
    private categoryService: CategoryService,
    private brandService: BrandService,
    private productService: ProductService,
    private messageService: MessageService,
    private basketService: BasketService

  ) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProduct();
    this.user = JSON.parse(localStorage.getItem("user"))
    console.log(this.user);
    this.selected();
  }

  selected() {
    console.log(this.selectedBrand);
    // this.filterBrand(this.selectedCategory);
  }

  selectCategory() {
    console.log(this.selectedCategory);
    this.filterCategory(this.selectedCategory);
  }

  getAllCategory() {
    this.categoryService.getCategories().subscribe(res => {
      this.categoryList = res;
      console.log(this.categoryList);
    })
  }

  getAllBrand() {
    this.brandList = []
    this.brandService.getBrands().subscribe(res => {
      this.productList.forEach(pro => {
        res.forEach(r => {
          if (r.id == pro.brandId) {
            this.brandList.indexOf(r) == -1 ? this.brandList.push(r) : false
          }
        })
      })
    })
  }

  getAllProduct(){
    this.productService.getProducts().subscribe(res => {
      this.productList = res;
      this.productListt = res;
      console.log(this.productList[0].categoryId);
    })
  }

  filterCategory(selectedCategory: number) {
    this.productList = this.productListt.filter(e => e.categoryId == selectedCategory);
    console.log(this.productList);
    this.getAllBrand()
  }

  filterBrand() {
    console.log(this.selectedBrand);
    this.productList = this.productListt.filter(e => e.brandId == this.selectedBrand && e.categoryId == this.selectedCategory );
    console.log(this.productList);
  }


}
