import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArticlesService } from './articles.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesComponent } from './articles/articles.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateArticleComponent } from './create-article/create-article.component';
import { FormsModule }   from '@angular/forms';
import { ShowArticleComponent } from './show-article/show-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticlesComponent,
    CreateArticleComponent,
    ShowArticleComponent,
    UpdateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
