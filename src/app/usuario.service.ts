import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UsuarioService {

  // acessando a url do backend para retornar os usuarios 
  public urlUsuario = "http://localhost:8000/usuario";
  

  // adicionar o httpclient no constructor 
  constructor(public http: HttpClient) { }

  public findAll():Observable<any> {
    return this.http.get(this.urlUsuario);
  }

  // model salvar usuario
  public salvarUsuario(usuario):Observable<any>
  {
    // método retorna para a mesma url, porém com método POST
    return this.http.post(this.urlUsuario, usuario);
  }


}
