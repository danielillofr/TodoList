import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApihttpService } from './../../services/apihttp.service';
import { TipoUsuario } from './../../interfaces/usuario.interface';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './grid-layout.css']
})
export class HomeComponent implements OnInit {

  titulo: String = 'TodoList';
  usuarios: TipoUsuario[] = [];
  constructor(private router: Router, apihttp: ApihttpService) {
    if (!(apihttp.logueado)) {
      router.navigate(['login']);
    }
    apihttp.solicitar_usuarios().subscribe (data => {
      const datosJson = data.json();
      if (datosJson.ok === false) {
        if (datosJson.errBaseDatos) {
          return alert('Error accediendo a la base de datos');
        } else {
          return alert(datosJson.err);
        }
      }
      this.usuarios = datosJson.usuarios;
      console.log(this.usuarios);
    });
   }

  ngOnInit() {
  }

}
