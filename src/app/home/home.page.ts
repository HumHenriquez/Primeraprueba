import { Component } from '@angular/core';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombreUsuario!:string;

  constructor(
    private estado:StateService) {
    this.estado.getNombreUsuario().subscribe((nombre:string)=>{
      this.nombreUsuario = nombre;
    })

  }

}
