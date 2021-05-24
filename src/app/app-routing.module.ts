import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { HeroesComponent } from './components/heroes/heroes.component';


const routes:Routes=[
  {
    path:'heroes',component:HeroesComponent
  },
  {
    path:'comments',component:CommentsComponent
  }
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
