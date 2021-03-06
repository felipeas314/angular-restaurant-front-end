import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('https://api.github.com').subscribe(response => {
      console.log(response);
    });
  }
}
