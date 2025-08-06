import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../shared/interface/product.interface';
import { TableComponent } from './table/table.component';
import { ProductosMockComponent } from '../../shared/mocks/productos.mock.component';


@Component({
  selector: 'app-inventario',
  imports: [CommonModule, TableComponent],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss'
})
export class Inventario {

  rol: string = '';
  productos: Producto[] = ProductosMockComponent;

  ngOnInit() {
    this.rol = localStorage.getItem('rol') || '';
    // this.productos = []
  }

    limpiarProductos() {
    this.productos = [];
  }
}


