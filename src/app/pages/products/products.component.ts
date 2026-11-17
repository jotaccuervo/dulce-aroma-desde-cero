import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [
    ProductCardComponent,
    FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productos: Product[] = [];

  productosFiltrados: Product[] = [];

  filtro = '';

  categoriaSeleccionada = 'Todos';

  categorias = [
    'Todos',
    'Panes',
    'Pasteles',
    'Postres',
    'Tortas'
  ];

  constructor(
    private productService: ProductService
  ) {

    this.productService
      .getProducts()
      .subscribe(products => {

        console.log(
          'PRODUCTOS BACKEND:',
          products
        );

        this.productos = products.map(product => ({

          id: product.id,

          nombre: product.name,

          descripcion: product.description,

          precio: product.price,

          imagen: product.imageUrl,

          categoria: product.categoryName

        }));

        this.productosFiltrados = [
          ...this.productos
        ];

      });

  }

  filtrar(): void {

    this.productosFiltrados =
      this.productos.filter(producto => {

        const coincideNombre =

          producto.nombre
            .toLowerCase()
            .includes(
              this.filtro.toLowerCase()
            );

        const coincideCategoria =

          this.categoriaSeleccionada === 'Todos'

          ||

          producto.categoria ===
          this.categoriaSeleccionada;

        return (
          coincideNombre &&
          coincideCategoria
        );

      });

  }

}
