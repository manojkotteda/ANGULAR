import { Component, OnInit } from '@angular/core';
import { NewsArticles } from 'src/app/models/newsArticles';
import { ApiCallsService } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  columns: number;
  rheight:string;

  //property variables
  isLoading=true;
  articles:Array<NewsArticles>

  constructor(private apiService:ApiCallsService) { }

  ngOnInit() {
    this.columns = (window.innerWidth <= 1056) ? 1 : 3;
    this.rheight =(window.innerWidth <= 1056) ? "650px" : "800px";
    
    this.apiService.getAllNews().subscribe(data=>{
      console.log(data[0].title);
      this.articles = data;
      this.isLoading=false;
    })
  }

  openWindow(str:string){
    window.open(str);
  }

  onResize(event) {
    this.columns = (event.target.innerWidth <= 1056) ? 1 : 3;
    this.rheight =(event.target.innerWidth <= 1056) ? "650px" : "800px";
    console.log(event.target.innerWidth)
  }

}
