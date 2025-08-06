
export interface Producto {
  nombre: string;
  precio: number;
  cantidad: number;

  // Nuevos campos agregados
  categoria: string;
  descripcion: string;
  stockMinimo: number;
}