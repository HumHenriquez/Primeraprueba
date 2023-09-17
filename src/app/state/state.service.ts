import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private nombreUsuario:BehaviorSubject<string> = new BehaviorSubject<string>('');

  public getNombreUsuario(){
    return this.nombreUsuario.asObservable();
  }


  public setNombreUsuario(nombre:string){
    this.nombreUsuario.next(nombre);

  }

  constructor() { }
}
