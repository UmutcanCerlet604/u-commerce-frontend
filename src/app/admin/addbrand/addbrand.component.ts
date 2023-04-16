import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Brand } from 'src/app/model/brand';
import { BrandService } from 'src/app/services/brand/brand.service';


@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.css']
})
export class AddbrandComponent implements OnInit {

  brand: Brand = new Brand();
  brandList: Brand[] = new Array();
  submitted: boolean = false;
  productDialog: boolean = false;



  constructor(private brandService: BrandService ,private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.getBrands();
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
  openNew() {
    this.submitted = false;
    this.productDialog = true;
  }


  addBrand() {
    this.brandService.addBrand(this.brand).subscribe(res => {
      console.log(res);
      this.hideDialog();
      this.getBrands();
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe(res => {
      console.log(res);
      this.brandList = res;
      console.log(this.brandList);
    })
  }

  delete(id: number) {
    this.brandService.delete(id).subscribe(res => {
      this.getBrands();
    })
  }

  edit(brand: Brand) {
    console.log(brand);
    this.brand = { ...brand }
    this.productDialog = true;
  }

}



