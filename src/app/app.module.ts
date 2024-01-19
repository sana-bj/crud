import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AuthServiceComponent } from './auth-service/auth-service.component';
import { LoginComponent } from './login/login.component';
import { SecureComponent } from './secure/secure.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    NavbarComponent,
    MovieDetailComponent,
    AuthServiceComponent,
    LoginComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
