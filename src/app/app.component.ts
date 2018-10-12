import { Component } from '@angular/core';
import { SocketServiceService } from './services/socket-service.service';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ftsock';
  private ioConnection: any;

  constructor (private socketService: SocketServiceService) {
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



}
