import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  totalItems = 0;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {

    this.actualizarContador();

  }

  actualizarContador(): void {

    this.totalItems =
      this.cartService.getTotalItems();

  }

}
