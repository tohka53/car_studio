import { Injectable } from '@angular/core';
import productos from '../interfaz/productos.interface';
import { Firestore, addDoc } from '@angular/fire/firestore/firebase';
import { collection } from '@firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private firestore: Firestore) { }

   addProducto(productos: productos)
  {
    const productosRef = collection(this.firestore, 'productos');
    return addDoc(productosRef,productosRef);
    
    
  }
}
