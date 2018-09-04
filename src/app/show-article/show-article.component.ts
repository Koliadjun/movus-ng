import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.scss']
})
export class ShowArticleComponent implements OnInit {
  id: number;
  private sub: any;

  constructor(private articlesService: ArticlesService, private route: ActivatedRoute) { }

  article
  


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']})
    this.articlesService.getArticleById(this.id).subscribe((data)=>{
      this.article=data;
    })
  }
}
