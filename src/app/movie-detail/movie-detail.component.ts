import { Component , OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie!: any; // Créez une propriété pour stocker les détails du film

  constructor(
    private DataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const movieId = params.get('id');
  
      if (movieId !== null) {
        this.DataService.getMovieDetails(movieId).subscribe(data => {
          console.log(data)
          this.movie = data;
        });
      } else {
       
          console.error();
        
      }
    });
  }
  
}
