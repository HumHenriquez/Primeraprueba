import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { StateService } from '../state/state.service';

export interface InterfaceUsuario {
  nombre:string,
  password:string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin:FormGroup
  constructor(
    private router: Router,
    private fb:FormBuilder,
    private estado:StateService

  ) { 
    this.formularioLogin = this.fb.group({
      usuario:'',
      password:''

    })
  }

  ngOnInit() {
  }
  
  login(){
    const usuario: InterfaceUsuario = {
      //obtener datos de usuario
      nombre:this.formularioLogin.get('usuario')?.value,
      password:this.formularioLogin.get('password')?.value,

    }



    if(usuario.nombre.trim()=='' || usuario.password.trim()==''){
      // enviar una alerta debe completar los datosdel formulario
      alert('debe completar todos los campos');
      return;
    }
    alert('Inicio de sesion exitoso!!')
    this.router.navigate(['/home']);
    this.estado.setNombreUsuario(usuario.nombre);

  
    
    //obtener los datos de usuario
    //validar datos
    // redireccion al home mensaje de datos correctos
    //guardar nombre de usuario en el state service



  }

}
