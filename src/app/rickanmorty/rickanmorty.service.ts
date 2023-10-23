import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RickanmortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/';

  constructor(private http:HttpClient) { 
  }

  obtenerDatos(){
    return this.http.get(`https://rickandmortyapi.com/api/character/`);
 }



}
