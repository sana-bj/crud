import { Component, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { catchError, Observable, of, map } from 'rxjs';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {
  @ViewChild("myTable") table!: DatatableComponent;;
  ColumnMode = ColumnMode;
  films !:any[];
  constructor(private DataService: DataService){}

 
  ngOnInit() {
    this.DataService.getPopularMovies().subscribe(
      (data: any) => {
        this.films = data.results; 
        console.log(this.films);// Assurez-vous de stocker les données dans 'movies'
      },
      (error) => {
        console.error(error);
      }
    );
  }



}
