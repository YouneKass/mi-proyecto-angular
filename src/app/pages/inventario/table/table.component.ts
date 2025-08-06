import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { ProductosMockComponent } from '../../../shared/mocks/productos.mock.component';
import { Producto } from '../../../shared/interface/product.interface';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() datos: Producto[] = []

  dataSource = new MatTableDataSource<Producto>(ProductosMockComponent);
  columnas: string[] = ['nombre', 'precio', 'cantidad'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['datos']) {
      this.dataSource.data = this.datos;
    }
  }
}
