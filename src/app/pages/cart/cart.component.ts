import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  items: CartItem[] = [];

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {

    this.loadCart();

  }

  loadCart(): void {

    this.items = this.cartService.getItems();

  }

  getTotal(): number {

    return this.cartService.getTotal();

  }

    removeItem(productId: number): void {

  this.cartService.removeProduct(productId);

  this.items =
    this.cartService.getItems();

}



  clearCart(): void {

  this.cartService.clearCart();

  this.items = [];

}

}
