import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.productService
      .getProductById(id)
      .subscribe(product => {

        this.product = {

          id: product.id,

          nombre: product.name,

          descripcion: product.description,

          precio: product.price,

          imagen: product.imageUrl,

          categoria: product.categoryName

        };

      });

  }

  addToCart(): void {

    if (!this.product) {
      return;
    }

    this.cartService.addProduct(
      this.product
    );

    alert(
      `${this.product.nombre} agregado al carrito`
    );

  }

}
