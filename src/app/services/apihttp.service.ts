import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';
import { TipoUsuario } from './../interfaces/usuario.interface';


@Injectable({
  providedIn: 'root'
})
export class ApihttpService {
  public token;
  public logueado: Boolean = false;
  constructor(private http: Http) {
  }

  Solicitar_api() {
    console.log('Solicitando api en el servidcio');
    return this.http.get('http://localhost:3000/api/hola');
  }

  solicitar_token (usuario: String, clave: String) {
    return this.http.post('http://localhost:3000/api/usuarios/login', {nombre: usuario, clave});
  }

  solicitar_usuarios () {
    const opciones = {
      headers: new Headers ({
        Authorization: this.token
      })
    };
    return this.http.get(`http://localhost:3000/api/usuarios`, opciones);
  }

  eliminar_usuario (id: String) {
    const opciones = {
      headers: new Headers ({
        Authorization: this.token
      })
    };
    return this.http.delete(`http://localhost:3000/api/usuarios/${id}`, opciones);
  }

  modificar_usuario (id: String)
  {
    const opciones = {
      headers: new Headers ({
        Authorization: this.token
      })
    };
    return this.http.put(`http://localhost:3000/api/usuarios/${id}`, {nombre: 'Nuevo nombre'}, opciones);
  }

}
