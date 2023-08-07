import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl='https://api.themoviedb.org/3'
  apiKey='08cc33bd5ae3a747598ce2ad84376e66'
  // "08cc33bd5ae3a747598ce2ad84376e66"

  //banner api data
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apiKey}`)
  }

  //trending Movies
  trendingMovieApiData() :Observable < any >{
    return  this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apiKey}`)
  }

  //search movie
  getSearchMovie(data:any):Observable<any>{
    
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`)
  }


  // get movie details

  getMovieDetails(data:any):Observable<any>{
    console.log(data, "masood all dat")
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apiKey}`)
  }

  //get movie video
  getMovieVideo(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apiKey}`)
  }

  //get movie cast
  getMovieCast(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apiKey}`)
  }

  //get action movie
  fetchActionMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=28`)
  }

  //adventure movie
  fetchAdventureMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=12`)
  }

  //animation
  fetchAnimationMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=16`)
  }
   
  //thriller
  fetchThrillerMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=53`)
  }

}
