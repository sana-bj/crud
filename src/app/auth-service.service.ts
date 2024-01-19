// src/app/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private username: string | undefined;

  login(username: string, password: string): boolean {
    // Logique de connexion (simple pour l'exemple)
    if (username === 'root' && password === 'root') {
      this.isAuthenticated = true;
      this.username = username;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.username = undefined;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  getUsername(): string | undefined {
    return this.username;
  }
}
