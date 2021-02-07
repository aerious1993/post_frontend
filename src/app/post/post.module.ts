import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PostService } from './_services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostListsComponent } from './post-lists/post-lists.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostDetailsResolver } from './_resolvers/post-details.resolver';
import { CommentListsComponent } from './comment-lists/comment-lists.component';


@NgModule({
  declarations: [PostComponent, PostListsComponent, PostDetailsComponent, CommentListsComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [PostService, PostDetailsResolver]
})
export class PostModule { }
