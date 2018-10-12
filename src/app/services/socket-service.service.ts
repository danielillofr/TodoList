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
    this.socket = socketIo(SERVER_URL);
  }

  public onMessageCallback(): Observable<any> {
    return new Observable<any>(observer => {
        this.socket.on('Mensaje2', (data: any) => observer.next(data));
    });
  }

  public onMessageA(): Observable<any> {
    return new Observable<any>(observer => {
        this.socket.on('messageA', (data: any) => observer.next(data));
    });
  }
  public onMessageB(): Observable<any> {
    return new Observable<any>(observer => {
        this.socket.on('messageB', (data: any) => observer.next(data));
    });
  }
  public sendMessage (mensaje: String) {
    this.socket.emit ('Mensaje', {Apellido: mensaje}, (respuesta) => {
      console.log(respuesta);
    });
  }

  public onEvent(event: String): Observable<any> {
    return new Observable<String>(observer => {
        this.socket.on(event, () => observer.next());
    });
  }
}
