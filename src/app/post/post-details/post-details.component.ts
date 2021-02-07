import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postDetails: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.data.PostDetail) {
      this.postDetails = this.route.snapshot.data.PostDetail;
    }
  }

}
