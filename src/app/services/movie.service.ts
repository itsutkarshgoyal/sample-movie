import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map, tap } from 'rxjs/operators';
import { Movie } from './movie';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private readonly http: HttpClient) { }

  private MOVIE_SERVICE_BASE_URL = "/assets/";

    // Gets the list of products.
    public getMovies(): Observable<Movie[]> {
      const url = `${this.MOVIE_SERVICE_BASE_URL}/movies.json`;
      return this.http.get<Movie[]>(url);
    }

   // Gets the product details.
  public getMovie(imdbID: string): Observable<Movie | undefined> {
    return this.getMovies()
    .pipe(
      map((products: Movie[]) => products.find(p => p.imdbID === imdbID))
    );
  }

  private searchtext: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public searchText$ = this.searchtext.asObservable();

  public searchMovie(searchText:string){
    this.searchtext.next(searchText);
  }

  private filtertext: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public filterText$ = this.filtertext.asObservable();
  public filterMovie(filterText:string){
    this.filtertext.next(filterText);
  }
}
