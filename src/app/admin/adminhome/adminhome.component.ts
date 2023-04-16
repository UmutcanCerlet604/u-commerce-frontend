import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  data: any;
  data2: any;
  chartOptions: any;
  chartOptions2: any;
  basicData: any;
  basicOptions: any;

  constructor(
    private productService :ProductService,

  ) { }

  ngOnInit() {

    this.data = {
      labels: ['Toplam Ürün', 'Satın Alınmış Ürün', 'Yayında Olan Ürün'],
      datasets: [
        {
          data: [360, 50, 100],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726"
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D"
          ]
        }
      ]
    };

    this.data2 = {
      labels: ['Toplam Kullanıcı', 'Aktif Kullanıcı', 'Pasif Kullanıcı'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]
    };

    this.basicData = {
      labels: [
        'Ocak',
        'Şubat',
        'Mart',
        'Nisan',
        'Mayıs',
        'Haziran',
        'Temmuz',
        'Ağustos',
        'Eylül',
        'Ekim',
        'Kasım',
        'Aralık'
      ],
      datasets: [
        {
          label: 'Toplam  Satış',
          backgroundColor: '#42A5F5',
          data: [
            65,
            59,
            80,
            81,
            56,
            55,
            40,
            80,
            25,
            32,
            45,
            72,
          ]},
      ]
  };
  }
}
