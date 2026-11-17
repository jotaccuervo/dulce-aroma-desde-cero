import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: CartItem[] = [];

  private cartItemsSubject =
    new BehaviorSubject<CartItem[]>([]);

  cartItems$ =
    this.cartItemsSubject.asObservable();

  constructor() {

    const data = localStorage.getItem('cart');

    if (data) {
      this.items = JSON.parse(data);
    }

    this.cartItemsSubject.next(this.items);

  }

  private saveCart(): void {

    localStorage.setItem(
      'cart',
      JSON.stringify(this.items)
    );

    this.cartItemsSubject.next(this.items);

  }

  getItems(): CartItem[] {

    const data = localStorage.getItem('cart');

    if (data) {
      this.items = JSON.parse(data);
    }

    return this.items;

  }

  addProduct(product: Product): void {

    const existingItem = this.items.find(
      item => item.product.id === product.id
    );

    if (existingItem) {

      existingItem.quantity++;

    } else {

      this.items.push({
        product,
        quantity: 1
      });

    }

    this.saveCart();

  }

  removeProduct(productId: number): void {

    this.items = this.items.filter(
      item => item.product.id !== productId
    );

    this.saveCart();

  }

  clearCart(): void {

    this.items = [];

    localStorage.removeItem('cart');

    this.cartItemsSubject.next([]);

  }

  getTotal(): number {

    return this.items.reduce(
      (total, item) =>
        total + (item.product.precio * item.quantity),
      0
    );
  }

    getTotalItems(): number {

  return this.items.reduce(
    (total, item) => total + item.quantity,
    0
  );


  }

}
