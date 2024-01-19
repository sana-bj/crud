// src/app/login/login.component.ts
import { Component, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth-service.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService,  private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/films']);
    } else {
      // Afficher un message d'erreur
    }
  }
}
