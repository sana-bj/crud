// src/app/secure/secure.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css'],
})
export class SecureComponent {
  username: string = '';

  constructor(private authService: AuthService) {
    // Récupérer le nom d'utilisateur à partir du service d'authentification
    this.username = authService.getUsername() || '';
  }

  logout(): void {
    // Appeler la méthode de déconnexion du service d'authentification
    this.authService.logout();
  }
}
