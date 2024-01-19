import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LoginComponent } from './login/login.component';
import { SecureComponent } from './secure/secure.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  
  { path: 'films', component: FilmsComponent },
  { path: 'film/:id', component: MovieDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'secure', component: SecureComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Rediriger vers la page de connexion par défaut
  { path: '**', redirectTo: '/login' }, // Rediriger vers la page de connexion pour les routes inconnues
  // Ajoutez d'autres routes au besoin
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
