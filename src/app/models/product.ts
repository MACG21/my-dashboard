export interface Product {
  id: number;
  title: string;
  descripcion: string;
  categoria: string;
  cantidad: number;
  costoFabrica: number;
  precio: number;
}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public descripcion: string,
    public categoria: string,
    public cantidad: number,
    public costoFabrica: number,
    public precio: number
  ) {}
}
