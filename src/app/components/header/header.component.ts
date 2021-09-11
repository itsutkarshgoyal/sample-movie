import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import {FormControl} from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, public _movieService: MovieService) { }
  filter = new FormControl();
  fasearch = faSearch;
  filterList: string[] = ['Language', 'Location'];
  ngOnInit(): void {
  }

  searchText(text: HTMLInputElement)
  {
    this.router.navigate([""]);
    this._movieService.searchMovie(text.value);
  }
  changeFilter(value:string){
    console.log(value);
    this.router.navigate([""]);
    this._movieService.filterMovie(value);
  }
}
