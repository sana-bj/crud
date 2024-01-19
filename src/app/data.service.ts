import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  private apiKey = 'bf4867e4c6c415b3368d9b02ff3c252f';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopularMovies() : Observable<[]>{
    console.log("service");
   
    return this.http.get<[]>(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  getMovieDetails(movieId: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`;

    return this.http.get(url);
  }
}
