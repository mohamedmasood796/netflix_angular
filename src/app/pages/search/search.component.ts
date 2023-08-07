import { Component } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms'
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private service:MovieApiServiceService){}

  searchResult:any;

  searchForm=new FormGroup({
    movieName:new FormControl("")
  })

  submitForm(){
    console.log(this.searchForm.value,"haaaaaaaiiiiii")
    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
      console.log("Result serched", result)
      this.searchResult=result.results
    })
  }

}
