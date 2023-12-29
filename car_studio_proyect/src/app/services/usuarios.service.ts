import { Injectable } from '@angular/core';
import { Firestore, addDoc } from '@angular/fire/firestore/firebase';
import usuario from '../interfaz/usuario.interface';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private firestore: Firestore) { }

  addUsuario(usuario: usuario)
  {
    const usuarioRef = collection(this.firestore, 'usuarios');
    return addDoc(usuarioRef,usuario);
    
    
  }

}
