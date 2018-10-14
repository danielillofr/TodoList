import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApihttpService {

  constructor(private http: Http) {
  }

  Solicitar_api() {
    console.log('Solicitando api en el servidcio');
    return this.http.get('http://localhost:3000/api/hola');
  }

}
