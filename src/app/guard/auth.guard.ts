import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private authService: AuthService , private router:Router){}




  canActivate(): boolean {
    if (this.authService.isAuthenticated1()) {
      return true; // Si el usuario está autenticado, permite la navegación
    } else {
      this.router.navigate(['/login']); // Si no está autenticado, redirige al login
      return false;
    }
}}
