import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApihttpService } from './../../services/apihttp.service';
import { TipoUsuario } from './../../interfaces/usuario.interface';
import { SocketServiceService } from './../../services/socket-service.service';
import 'rxjs';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './grid-layout.css']
})
export class HomeComponent implements OnInit {

  titulo: String = 'TodoList';
  usuarios: TipoUsuario[] = [];
  tareas: any[] = [];
  textoTarea = '';
  constructor(private router: Router, private apihttp: ApihttpService, private socketService: SocketServiceService) {
    console.log('Pero que conste que el login ni ha empezado');
    if (!(apihttp.logueado)) {
      router.navigate(['login']);
    }
    socketService.onMensajes().subscribe ((mensajes: any) => {
      console.log('Mensajes:', mensajes);
      this.tareas = mensajes;
    });

    socketService.Solicitar_mensajes();

    // socketService.onMensajes().subscribe((message: any) => {
    //   console.log('Mensajes:', message);
    // });
   }
   Eliminar_tarea(_id: String) {
     this.socketService.Eliminar_mensaje (_id);
   }

   Crear_mensaje () {
     this.socketService.Crear_mensaje (this.textoTarea);
     this.textoTarea = '';
   }

   Rea_tarea (_id: String) {
     this.socketService.Realizar_mensaje (_id);
   }
  ngOnInit() {
  }

}
