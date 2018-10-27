import { Component } from '@angular/core';
import { SocketServiceService } from './services/socket-service.service';
// import { ApihttpService } from './services/apihttp.service';
import 'rxjs';
// import { TipoUsuario } from './interfaces/usuario.interface';









@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ftsock';
  // private ioConnection: any;
  // texto: String = 'Inicialmente nada';
  // usuarios: TipoUsuario[];
  // textoApi: String = '';
  constructor (private socketService: SocketServiceService) {
    // this.socketService.onMensajes().subscribe((message: any) => {
    //   console.log('Mensaje A:', message);
    // });
  // }
    // this.socketService.onMessageCallback().subscribe((message: any) => {
  //     console.log('Mensaje del callback:', message);
  //   });
    // this.socketService.onMessageB().subscribe((message: any) => {
    //   console.log('Mensaje B:', message);
    // });
  }
  //   this.socketService.onEvent('connect').subscribe ( () => {
  //     console.log('Conectado al servidor');
  //   });

  //   this.socketService.onEvent('disconnect').subscribe ( () => {
  //     console.log('Desconectado al servidor');
  //   });

  // }
  // EnviarMensaje () {
  //   this.socketService.sendMessage('sfdsfdsfsd');
  // }

  // Solicitar_api() {
  //   console.log('Solicitando API');

  //   this.apiHttp.solicitar_token().subscribe (data => {
  //     this.apiHttp.token = data.json().token;
  //     this.apiHttp.solicitar_usuarios().subscribe (usuariosDB => {
  //       const objeto = usuariosDB.json();
  //       if (objeto.ok) {
  //         this.usuarios = objeto.usuarios;
  //       } else {
  //         this.usuarios = [];
  //       }
  //     });
  //   });
  // }
  // Borrar(id) {
  //   this.apiHttp.eliminar_usuario(id).subscribe (data => {
  //     const objeto = data.json();
  //     if (objeto.ok)
  //     {
  //       console.log(objeto.usuario);
  //       this.textoApi = 'Objeto Borrado';
  //       this.apiHttp.solicitar_usuarios().subscribe (usuariosDB => {
  //         const objeto2 = usuariosDB.json();
  //         if (objeto2.ok) {
  //           this.usuarios = objeto2.usuarios;
  //         } else {
  //           this.usuarios = [];
  //         }
  //       });
  //     } else {
  //       this.textoApi = 'Objeto no borrado';
  //     }
  //   })
  // }

  // Modificar(id) {
  //   this.apiHttp.modificar_usuario (id).subscribe (data => {
  //     console.log(data.json());
  //   })
  // }

}
