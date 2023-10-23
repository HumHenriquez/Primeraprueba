import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { StateService } from '../state/state.service';
import { AuthService } from '../auth/auth.service';

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
    private router:Router,
    private fb:FormBuilder,
    private estado:StateService,
    private authService:AuthService

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
      
      nombre:this.formularioLogin.get('usuario')?.value,
      password:this.formularioLogin.get('password')?.value,
      

    }

    const exito = this.authService.login(usuario.nombre,usuario.password)

    if(exito){
    alert('Inicio de sesion exitoso!!')
    this.router.navigate(['/home']);
    this.estado.setNombreUsuario(usuario.nombre);
    }else{
      if(usuario.nombre.trim()=='' || usuario.password.trim()==''){
        // enviar una alerta debe completar los datosdel formulario
        alert('debe completar todos los campos');
        return;
      }
    }

  
    
    //obtener los datos de usuario
    //validar datos
    // redireccion al home mensaje de datos correctos
    //guardar nombre de usuario en el state service



  }}

