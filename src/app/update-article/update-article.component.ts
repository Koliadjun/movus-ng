import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss']
})
export class UpdateArticleComponent implements OnInit, OnDestroy {
   id: number;
  private sub: any;
  constructor(
    private articlesService: ArticlesService, 
    private route: ActivatedRoute) { }
  article:any = {
    title:'',
    text:''
  }
  
  update(article){
    this.articlesService.updateArticleById(article.id, this.article).subscribe(
      data => {
        console.log(data)
      },
      error =>{
        console.log(error.error);
      }
    )
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(params)
      this.articlesService.getArticleById(this.id).subscribe((data)=>{
        this.article=data;
        console.log(this.article);
      })
    }) 
  }
  ngOnDestroy(){
     this.sub.unsubscribe()
  }
}
