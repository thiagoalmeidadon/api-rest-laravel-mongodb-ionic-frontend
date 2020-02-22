import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[UsuarioService]
})
export class HomePage {

  // sempre inicializar os objetos da home 
  public usuarios = [];
  public usuarioCadastro = {"nome":'', "idade":null};

  constructor(private usuarioService:UsuarioService) {
    this.getUsuarios();
  }

  public getUsuarios()
  {
    this.usuarioService.findAll().subscribe(responde => this.usuarios = responde);
  }

  // método para salvar o usuário
  public salvarUsuario()
  {
    this.usuarioService.salvarUsuario(this.usuarioCadastro).subscribe(Response=>this.getUsuarios);
  }

}
