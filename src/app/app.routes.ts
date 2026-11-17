import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import{ProductDetailComponent} from './pages/product-detail/product-detail.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';



export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'productos',
    component: ProductsComponent
  },

  {
    path: 'nosotros',
    component: AboutComponent
  },

  {
    path: 'contacto',
    component: ContactComponent
  },

  {
    path: 'carrito',
    component: CartComponent
  },

  {
  path: 'productos/:id',
  component: ProductDetailComponent
},

{
  path: 'checkout',
  component: CheckoutComponent
}
];

