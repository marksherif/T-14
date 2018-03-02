import { Component } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { sproducts } from './sproducts';
import { Sprod } from './saraproduct';


@Component({
  selector: 'app-storec1',
  templateUrl: './StoreC1.component.html'
})
//export class StoreC1Component implements OnInit {
export class StoreC1Component  {
  products=sproducts;
  
  selectedProduct: Sprod;

onSelect(Sprod: Sprod): void {
  this.selectedProduct = Sprod;
}
}
