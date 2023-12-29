import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { ReactiveFormsModule } from '@angular/forms';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  formulario = new FormControl();
  constructor(
    private productosService: ProductosService
  ) {
    this.formulario = new FormControl({
      nombre: new FormControl(),
      codigo: new FormControl(),
      fecha_creacion: new FormControl(),
      description: new FormControl(),
      image: new FormControl()

    })
  }



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.productosService.addProducto(this.formulario.value);
    console.log(response);
  } 
 

}

@NgModule({
  imports: [
    
    ReactiveFormsModule
  ],
 
})
export class AppModule { }
