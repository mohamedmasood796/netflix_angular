import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( private service:MovieApiServiceService){}

  ngOnInit():void{
    console.log("hai")
    this.bannerData()
    this.trendingData()
    this.actionData()
    this.adventureData()
    this.animationData()
    this.thrillerData()
  } 
  bannerResult:any=[]
  trendingMovieResult:any=[]
  actionMovieResult:any=[]
  adventureMovieResult:any=[]
  animationMovieResult:any=[]
  thrillerMovieResult:any=[]

  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,"rersult")
      this.bannerResult=result.results
    })
  }

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,"masood")
      this.trendingMovieResult=result.results
    })
  }

  actionData(){
    this.service.fetchActionMovies().subscribe((result)=>{
      this.actionMovieResult=result.results
    })
  }

  adventureData(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
      this.adventureMovieResult=result.results
    })
  }

  animationData(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      this.animationMovieResult=result.results
    })
  }

  thrillerData(){
    this.service.fetchThrillerMovies().subscribe((result)=>{
      this.thrillerMovieResult=result.results
    })
  }


}
