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
  public usuarioCadastro = {"_id":"" , "nome":'' , "idade":null };

  constructor(private usuarioService:UsuarioService) {
    this.getUsuarios();
  }

  public getUsuarios()
  {
    this.usuarioService.findAll().subscribe(responde => this.usuarios = responde);
  }

 
  public salvarUsuario()
  {
    if(this.usuarioCadastro._id == "")
    {
      this.usuarioService.salvarUsuario(this.usuarioCadastro).subscribe(Response => this.getUsuarios);
    } else {
      this.usuarioService.editarUsuario(this.usuarioCadastro).subscribe(Response => this.getUsuarios);
    }
    
  }

  public atualizarForm(usuario: { "_id": string; "nome": string; "idade": any; })
  {
    this.usuarioCadastro = usuario;
  }

  public deletarUsuario(id: any)
  {
    this.usuarioService.deletarUsuario(id).subscribe(Response => this.getUsuarios);
  }

}
