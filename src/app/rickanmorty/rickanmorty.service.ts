import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, catchError, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickanmortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character/';
  private cajita: any[] | null = null;

  constructor(private http:HttpClient) {}


  obtenerDatos(): Observable<any[]> {
    // Si ya tenemos datos en la caché, devolverlos directamente
    if (this.cajita !== null) {
      return of(this.cajita);
    }

    // Si no hay datos en la caja  realizar la solicitud HTTP
    return this.http.get<any[]>(`${this.apiUrl}`).pipe(
      tap(data => {
        this.cajita = data;
        console.log('guardamoss')
      }),
      catchError(error => {
        this.cajita = null;
        return of([]);
        })
    );
  }

  recargarDatos(): void {
    this.cajita = null;
  }


  obtenerDatosCajita(): any[] | null {
    console.log(this.cajita);
    return this.cajita;
  }

  }
