import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/services/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit,OnDestroy {

  constructor(private _movieService:MovieService, private router:Router) { }

  public movieList :any = [];
  filterMovie : Movie[] = [];
  private movie_subscription: Subscription;
  private searchText_subscription: Subscription;
  private filterText_subscription: Subscription;

  ngOnInit(): void {
    this.loadData();
    this._movieService.searchText$.subscribe((text:string) => {this.searchMovie(text)} );
    this._movieService.filterText$.subscribe((text:string) => {this.filterDropdown(text)} )
  }

  // Load Data
  loadData()
  {
    this.movie_subscription = this._movieService.getMovies().subscribe(data => {
      if(data){
      this.movieList = JSON.parse(JSON.stringify(data))
      this.filterMovie = this.movieList
    }
    });
  }

  // naviate to movie detail page
  movieDetail(id:any){
    this.router.navigateByUrl('movie-detail/' + id);
  }

  // Search the product.
  searchMovie(filterBy: string) {
    filterBy = filterBy.toLowerCase();
    this.movieList = JSON.parse(JSON.stringify(this.filterMovie));

    if(filterBy === "")
    {
      return
    }

    this.movieList =  this.movieList.filter((movie: Movie) =>{
        return movie.Title.toLowerCase().includes(filterBy)
    })
  }

    // filter by language/location
    filterDropdown(filter: string) {
  
      if(!filter)
      {
        return
      }else if(filter ==="Language"){
        this.movieList =  this.movieList.sort((a, b) => (a.Language  > b.Language ) ? 1 : -1);
      }else {
        this.movieList = this.movieList.sort((a, b) => (a.Location  > b.Location ) ? 1 : -1);
      }
  
    }

  ngOnDestroy():void{
    this.movie_subscription.unsubscribe();
    this.searchText_subscription.unsubscribe();
    this.filterText_subscription.unsubscribe();
  }
}
