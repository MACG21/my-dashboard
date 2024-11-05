import { UsuarioService } from './../../../services/usuario.service';
import { RouterModule, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule, ButtonModule, RouterModule, FormsModule
  ],
  templateUrl: './users.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent implements OnInit {

  usuarios:Usuario[] = [];
  usuario:Usuario = new Usuario(0,0, '','','','');
  isEditMode: boolean = false;

  errorMessage: string = '';

  constructor(private usuarioService: UsuarioService,
              private router:Router){
              }

  ngOnInit(): void {
    this.getAllUsuarios();
  }

  // Obtener todos los usuarios
  getAllUsuarios(){
    this.usuarioService.getUsuarios().subscribe(data => {this.usuarios = data;})
  }

  // Crear un nuevo Usuario
saveUsuario() {
  if (this.isEditMode) {
    this.usuarioService.updateUsuario(this.usuario).subscribe({
      next: () => {
        this.getAllUsuarios(); // Recargar la lista después de guardar
        this.resetForm();
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 409) {
          this.errorMessage = 'El DPI ya está registrado. Intenta con otro valor.';
        } else if (err.status === 400) {
          this.errorMessage = 'Datos inválidos. Verifica la información ingresada.';
        } else {
          this.errorMessage = 'Ocurrió un error inesperado. Intenta nuevamente.';
        }
      }
    });
  } else {
    this.usuarioService.createUsuario(this.usuario).subscribe({
      next: () => {
        this.getAllUsuarios();
        this.resetForm();
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 409) {
          this.errorMessage = 'El DPI ya está registrado. Intenta con otro valor.';
        } else if (err.status === 400) {
          this.errorMessage = 'Datos inválidos. Verifica la información ingresada.';
        } else {
          this.errorMessage = 'Ocurrió un error inesperado. Intenta nuevamente.';
        }
      }
    });
  }
}
// Editar un Usuario
editUsuario(usuario:Usuario){
  this.usuario = { ...usuario};
  this.isEditMode = true;
 }

 // Eliminar un usuario
 deleteUsuario(usuarioId: number){
    this.usuarioService.deleteUsuario(usuarioId).subscribe(() => {
      this.getAllUsuarios();
    })
 }

 // Reiniciar el formulario
resetForm() {
  this.usuario = new Usuario(0, 0, '', '', '', ''); // Reseteamos el objeto de Usuario
  this.isEditMode = false; // Volvemos al modo de creación
}

}
