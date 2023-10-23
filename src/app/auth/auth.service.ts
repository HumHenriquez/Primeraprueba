import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router:Router) {}

  login(usuario: string, password: string) {
    if (usuario == 'nombre' && password == '1234') {
      this.isAuthenticated = true;
      localStorage.setItem('token', 'miToken'); // Simulamos un token de autenticación
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);


  }

  isAuthenticated1() {
    return this.isAuthenticated || !!localStorage.getItem('token');
  }
}