import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('https://api.github.com').subscribe(response => {
      console.log(response);
      console.log('Aqui legal');
    });
  }
}
