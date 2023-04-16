import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {

  category: Category = new Category();
  categoryList: Category[] = new Array();
  submitted: boolean = false;
  productDialog: boolean = false;

  constructor(private categoryService: CategoryService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.getCategories();
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  openNew() {
    this.submitted = false;
    this.productDialog = true;
  }



  addCategory() {
    console.log(this.category);
    this.categoryService.addCategory(this.category).subscribe(res=>{
      console.log(res);
      this.hideDialog();
      this.getCategories();
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(res=>{
      this.categoryList = res;
      console.log(this.categoryList);
    })
  }

  delete(id: number) {
    this.categoryService.delete(id).subscribe(res=>{
      this.getCategories();
    })
  }

  edit(category: Category) {
    console.log(category);
    this.category = {...category}
    this.productDialog = true;
  }

}
