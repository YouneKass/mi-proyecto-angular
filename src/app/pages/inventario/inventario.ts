import { Component, NgModule } from '@angular/core';
import path from 'path';
import { Home } from '../home/home';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Producto } from '../../shared/interface/product';


@Component({
  selector: 'app-inventario',
  imports: [CommonModule],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css'
})
export class Inventario {

  rol: string = '';
  productos: Producto[] = [];

  ngOnInit() {
    this.rol = localStorage.getItem('rol') || '';
    this.productos = [
      {nombre: 'HellDriver2', cantidad: 20},
      {nombre: 'Fornite', cantidad:7},
      {nombre: 'Valorant', cantidad:9},
      {nombre: 'Lol', cantidad:50},
      {nombre: 'Discord', cantidad:3},
      {nombre: 'overcooked', cantidad:15}
    ];
  }

    limpiarProductos() {
    this.productos = [];
  }
}


