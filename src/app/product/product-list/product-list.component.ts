import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('https://api.github.com').subscribe(response => {
      console.log(response);
      console.log('Aqui legal');
    });
  }
}
