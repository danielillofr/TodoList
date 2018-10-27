import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {
  private socket;

  constructor() {

    console.log('Alguien ha llamado al socket');
    this.socket = socketIo(SERVER_URL);
  }

  public onMensajes(): Observable<any> {
    return new Observable<any>(observer => {
        this.socket.on('Mensajes', (data: any) => observer.next(data));
    });
  }

  sendMessage (mensaje: String, callback, atributos?: any) {
    if (!atributos) {
      atributos = '';
    }
    this.socket.emit (mensaje, atributos, callback);
  }

  public Solicitar_mensajes() {
    this.sendMessage ('Sol_mensajes', null);
  }

  public Eliminar_mensaje(_id: String) {
    this.sendMessage ('Eli_mensaje', (respuesta) => {
      console.log('Respuesta:', respuesta);
      if (!respuesta.ok) {
        alert('No se ha podido borrar');
      }
    }, {_id});
  }

  public Crear_mensaje (textoTarea: String) {
    this.sendMessage ('Cre_mensaje', (respuesta) => {
      console.log(respuesta);
    },
    {textoTarea, realizada: false});
  }

  public Realizar_mensaje (_id: String) {
    this.sendMessage('Rea_mensaje', null, {_id});
  }

  public onEvent(event: String): Observable<any> {
    return new Observable<String>(observer => {
        this.socket.on(event, () => observer.next());
    });
  }
}
