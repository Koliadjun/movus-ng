import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      console.log(file);
    }
  }
  private prepareSave(): any {
    let input = new FormData();
    input.append('name', this.form.get('name').value);
    input.append('avatar', this.form.get('avatar').value);
    return input;
  }
  ngOnInit() {
   
  }

}
