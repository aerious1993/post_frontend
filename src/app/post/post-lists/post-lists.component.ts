import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.scss']
})
export class PostListsComponent implements OnInit {

  posts: any;

  constructor(
    private postservice: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.postservice.getposts().subscribe(
      data => {
        this.posts = data;
      }
    );
  }

  navigatePostDetails(postId: number) {
    this.router.navigateByUrl(`posts/${postId}`);
  }
}
