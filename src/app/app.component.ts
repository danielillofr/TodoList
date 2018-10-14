import { Component } from '@angular/core';
import { SocketServiceService } from './services/socket-service.service';
import { ApihttpService } from './services/apihttp.service';
import 'rxjs';








@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ftsock';
  private ioConnection: any;
  texto: String = 'Inicialmente nada';

  constructor (private socketService: SocketServiceService, private apiHttp: ApihttpService) {
    this.socketService.onMessageA().subscribe((message: any) => {
      console.log('Mensaje A:', message);
    });
    this.socketService.onMessageCallback().subscribe((message: any) => {
      console.log('Mensaje del callback:', message);
    });
    this.socketService.onMessageB().subscribe((message: any) => {
      console.log('Mensaje B:', message);
    });

    this.socketService.onEvent('connect').subscribe ( () => {
      console.log('Conectado al servidor');
    });

    this.socketService.onEvent('disconnect').subscribe ( () => {
      console.log('Desconectado al servidor');
    });

  }
  EnviarMensaje () {
    this.socketService.sendMessage('sfdsfdsfsd');
  }

  Solicitar_api() {
    console.log('Solicitando API');
    this.apiHttp.Solicitar_api().subscribe ((data) => {
      console.log('Datos recibidos por la api:', data);
      this.texto = data.json().ok;
    });
  }

}
