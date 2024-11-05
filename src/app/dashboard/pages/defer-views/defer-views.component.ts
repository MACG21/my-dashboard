import { ClienteService } from './../../../services/cliente.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [
    CommonModule, ButtonModule, RouterModule, FormsModule
  ],
  templateUrl: './defer-views.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferViewsComponent implements OnInit {

  clientes:Cliente[] = [];
  cliente:Cliente = new Cliente(0, 0,'','','','');
  isEditMode: boolean = false;

errorMessage: string = '';

  constructor(private clienteService: ClienteService, private router:Router){}

  ngOnInit(): void {
    this.getAllClientes();
   }

   // Obtener todos los clientes
   getAllClientes(){
    this.clienteService.getClientes().subscribe(data =>{this.clientes=data;})
   }

   // Crear un nuevo Cliente
saveCliente() {
  if (this.isEditMode) {
    this.clienteService.updateCliente(this.cliente).subscribe({
      next: () => {
        this.getAllClientes(); // Recargar la lista después de guardar
        this.resetForm();
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 409) {
          this.errorMessage = 'El NIT o DPI ya está registrado. Intenta con otro valor.';
        } else if (err.status === 400) {
          this.errorMessage = 'Datos inválidos. Verifica la información ingresada.';
        } else {
          this.errorMessage = 'Ocurrió un error inesperado. Intenta nuevamente.';
        }
      }
    });
  } else {
    this.clienteService.createCliente(this.cliente).subscribe({
      next: () => {
        this.getAllClientes();
        this.resetForm();
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 409) {
          this.errorMessage = 'El NIT o CUI ya está registrado. Intenta con otro valor.';
        } else if (err.status === 400) {
          this.errorMessage = 'Datos inválidos. Verifica la información ingresada.';
        } else {
          this.errorMessage = 'Ocurrió un error inesperado. Intenta nuevamente.';
        }
      }
    });
  }
}
   // Editar un cliente
   editCliente(cliente: Cliente){
    this.cliente = { ...cliente};
    this.isEditMode = true;
   }

   // Eliminar un cliente
   deleteCliente(clienteNit: number){
      this.clienteService.deleteCliente(clienteNit).subscribe(() => {
        this.getAllClientes();
      })
   }

   // Reiniciar el formulario
  resetForm() {
    this.cliente = new Cliente(0, 0, '', '', '', ''); // Reseteamos el objeto de cliente
    this.isEditMode = false; // Volvemos al modo de creación
  }

}
