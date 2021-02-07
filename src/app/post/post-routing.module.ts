import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post.component';
import { PostDetailsResolver } from './_resolvers/post-details.resolver';

const routes: Routes = [
  {
    path: '', component: PostComponent
  },
  {
    path: 'posts/:id', component: PostDetailsComponent, resolve: { PostDetail: PostDetailsResolver },
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
