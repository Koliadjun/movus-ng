import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service'
@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }
  articles:any = [];
  articlesLoading= true;
  delete(item){
    this.articlesService.deleteArticle(item.id).subscribe(
      data => {
        console.log(data)
        this.articles = this.articles.filter(article => article.id !== item.id);
      },
      error => {
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.articlesService.getArticles().subscribe((data)=>{
      this.articles=data;
      this.articlesLoading=false;
    })
  }

}
