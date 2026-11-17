import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categorias = [
    {
      nombre: 'Panes',
      descripcion: 'Recién horneados',
      icono: '🍞'
    },
    {
      nombre: 'Pasteles',
      descripcion: 'Dulzura pura',
      icono: '🎂'
    },
    {
      nombre: 'Postres',
      descripcion: 'Delicias dulces',
      icono: '🍪'
    },
    {
      nombre: 'Tortas',
      descripcion: 'Para celebrar',
      icono: '🎉'
    }
  ];

}
