import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:8080/cliente';

  constructor(private http:HttpClient){}

  //Metodo para listar los clientes
  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  //Metodo para buscar por nit
  getClientesById(nit:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiUrl}/${nit}`);
  }

  //Metodo para crear un cliente
  createCliente(cliente:Cliente){
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  //Metodo para actualizar un cliente
  updateCliente(cliente:Cliente){
    return this.http.put(this.apiUrl, cliente);
  }

  //Metodo para eliminar
  deleteCliente(nit:number){
    return this.http.delete(`${this.apiUrl}/${nit}`)
  }

}
