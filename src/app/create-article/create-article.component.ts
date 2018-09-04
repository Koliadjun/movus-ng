import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  constructor(
    private articleService: ArticlesService,
    private router: Router
    ) { }
  article:any = {
    title:'',
    text:'',
    img:''
  }
  errors:any;
  submit(){
    this.articleService.createArticle(this.article).subscribe(
      data => {
        console.log(data)
        let id = data['id']
        this.router.navigate([id])
      },
      error =>{
        console.log(error.error);
        this.errors = error.error
      }
    )
  }
  ngOnInit() {
   
  }

}
