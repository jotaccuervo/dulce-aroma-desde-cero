import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!: Product;

  showMessage = false;

  constructor(
    private cartService: CartService,
    private router: Router

  ) {}


      viewProduct(): void {

      this.router.navigate([
        '/productos',
        this.product.id
      ]);

    }

  addToCart(): void {

    this.cartService.addProduct(this.product);

    this.showMessage = true;

    setTimeout(() => {

      this.showMessage = false;

    }, 3000);

  }

}
