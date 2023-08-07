import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  constructor(private service:MovieApiServiceService, private router:ActivatedRoute){
  }

  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;

  ngOnInit(){
    let getParamId=this.router.snapshot.paramMap.get('id')
    console.log(getParamId,"paramsid")
    this.getMovie(getParamId)
    this.getVideo(getParamId)
    this.getMovieCast(getParamId)
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{
      console.log(result,"all resulllt")
      this.getMovieDetailResult=result
    })
  }

  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((result)=>{
      console.log(result,"movie video")
      result.results.forEach((element:any) => {
        if(element.type==="Trailer"){
          this.getMovieVideoResult=element.key
        }
      });
    })
  }

  //movie cast
  getMovieCast(id:any){
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,"movie cast")
      this.getMovieCastResult=result.cast
    })
  }

}
