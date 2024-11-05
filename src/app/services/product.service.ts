import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/product';

  constructor(private http:HttpClient) { }

  //Método para listar los productos
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
  //Método para buscar por id
  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  //Método para crear un producto
  createProduct(product:Product){
    return this.http.post<Product>(this.apiUrl, product);
  }

  //Método para actualizar un producto
  updateProduct(product:Product){
    return this.http.put(this.apiUrl, product);
  }

  //Método para eliminar un producto
  deleteProduct(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
