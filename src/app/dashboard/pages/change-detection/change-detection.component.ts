import { Product } from './../../../models/product';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../../../services/product.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [
    CommonModule, ButtonModule, RouterModule, FormsModule
  ],
  templateUrl: './change-detection.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent implements OnInit{

  products:Product[] = [];
  product: Product = new Product(0, '', '', '', 0, 0, 0);
  isEditMode: boolean = false;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getAllProducts();
  }
  // Obtener todos los productos
  getAllProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

    // Crear un nuevo producto
    saveProduct() {
      if (this.isEditMode) {
        this.productService.updateProduct(this.product).subscribe(() => {
          this.getAllProducts(); // Reload la lista después de guardar
          this.resetForm();
        },
        (error) => {
          this.handleError(error);
        }
      );
      } else {
        this.productService.createProduct(this.product).subscribe(() => {
          this.getAllProducts();
          this.resetForm();
        },
        (error) => {
          this.handleError(error);
        }
      );
      }
    }

    // Editar un producto
  editProduct(product: Product) {
    this.product = { ...product }; // Copiamos los datos del producto seleccionado
    this.isEditMode = true;
  }

  // Eliminar un producto
  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.getAllProducts();
    });
  }

  // Reiniciar el formulario
  resetForm() {
    this.product = new Product(0, '', '', '', 0, 0, 0); // Reseteamos el objeto de producto
    this.isEditMode = false; // Volvemos al modo de creación
  }

  // Manejo de errores
  handleError(error: any){
    // 409 Conflict
    if(error.status == 409){
      alert("El código del producto ya existe. Porfavor, elija otro. ");
    // 400 Bad Request
    } else if (error.status == 400) {
      alert("Error en los datos ingresados. Verifique que estén correctamente ingresados.");
    //Errores de otro tipo, muestra un mensaje generico.
    } else {
      alert("Ocurrió un error inesperado. Intente nuevamente más tarde.");
    }
  }

}

