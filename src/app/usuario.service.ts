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
  public salvarUsuario(usuario: { "_id": string; "nome": string; "idade": any; }):Observable<any>
  {
    // método retorna para a mesma url, porém com método POST
    return this.http.post(this.urlUsuario, usuario);
  }

  //  para editar o usuario 
  public editarUsuario(usuario: { _id: any; nome?: string; idade?: any; }):Observable<any>
  {
    // concatenar na url / e a id do usuario 
    return this.http.put(this.urlUsuario + "/" + usuario._id, usuario);
  }

  public deletarUsuario(id: string):Observable<any>
  {
    // concatenar na url / e a id do usuario 
    return this.http.delete(this.urlUsuario + "/" + id);
  }

}
