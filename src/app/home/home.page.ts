import { Component } from '@angular/core';
import { StateService } from '../state/state.service';
import { AuthService } from '../auth/auth.service';
import { RickanmortyService } from '../rickanmorty/rickanmorty.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  datoCaja: any[] | null = [];
  nombreUsuario!:string;
  datos:any;

  constructor(private estado:StateService, private authService:AuthService, private rickanmortyService:RickanmortyService) {


    this.estado.getNombreUsuario().subscribe((nombre:string)=>{
      this.nombreUsuario = nombre;
    } )
  }

  logout(){
    this.authService.logout();

  }

  obtenerCaja(){
    this.datoCaja = this.rickanmortyService.obtenerDatosCajita();
  } 




}
