import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './StoreC4.component.html'
})

export class StoreC4Component {
  products: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.http.get('/product').subscribe(data => {
    this.products = data;
  });
}

}
