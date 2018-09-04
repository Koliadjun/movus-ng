import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';


const routes: Routes = [{
  path: '',
  component: ArticlesListComponent
},
{
  path: 'new',
  component: CreateArticleComponent
},
{
  path: ':id',
  component: ShowArticleComponent
},
{
  path: 'update/:id',
  component: UpdateArticleComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
