import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articleUrl = 'http://localhost:3000/'
  articleString ='articles/'
  updateSrting = 'update/'
  constructor(private _http: HttpClient) { }
  getArticles(){
    return this._http.get(this.articleUrl+this.articleString)
  }
  getArticleById(id){
    return this._http.get(this.articleUrl+this.articleString+id)
  }
  updateArticleById(id, data){
    return this._http.put(this.articleUrl+this.articleString+id, data)
  }
  createArticle(data){
    return this._http.post(this.articleUrl+this.articleString, data)
  }
  deleteArticle(id){
    return this._http.delete(this.articleUrl+this.articleString+id)
  }
}

