import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/usuario'

  constructor(private http:HttpClient) { }

  //Metodo para listar los Usuarios
  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  //Método para buscar por id
  getUsuariosById(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  //Metodo para crear un usuario
  createUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  //Metodo para actualizar un usuario
  updateUsuario(usuario:Usuario){
    return this.http.put(this.apiUrl, usuario);
  }

  //Metodo para eliminar
  deleteUsuario(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
