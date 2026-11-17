import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-products',
  imports: [ProductCardComponent, RouterLink],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})
export class FeaturedProductsComponent {

  productos: Product[] = [];

  constructor(
    private productService: ProductService
  ) {

    this.productService
      .getProducts()
      .subscribe(products => {

        this.productos = products
          .map(product => ({

            id: product.id,

            nombre: product.name,

            descripcion: product.description,

            precio: product.price,

            imagen: product.imageUrl,

            categoria: product.categoryName

          }))
          .slice(0, 3);

      });

  }

}
