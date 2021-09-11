import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit,OnDestroy {

  constructor(private _movieService: MovieService, private route:ActivatedRoute) { }
  public movie = {};
  private imdbID:any;
  private _subscription: Subscription;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.imdbID = params.params["{imdbID}"];
    });
    this.loadData(this.imdbID);
  }

  // load data
  loadData(id:any){
    this._subscription = this._movieService.getMovie(id).subscribe(data => {
      this.movie = data;
    })
  }

  ngOnDestroy() {
    this._subscription.unsubscribe()
}
}
