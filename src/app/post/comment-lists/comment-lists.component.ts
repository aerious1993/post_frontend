import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../_services/comment.service';

@Component({
  selector: 'app-comment-lists',
  templateUrl: './comment-lists.component.html',
  styleUrls: ['./comment-lists.component.scss']
})
export class CommentListsComponent implements OnInit {

  @Input() postId: any;
  comments: any;
  filtered_comments: any;
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getCommentsByPostId(this.postId).subscribe(
      data => {
        this.comments = data;
        this.filtered_comments = this.comments;
      }
    );
  }
  values = '';
  filterComments(event: any) {
    this.filtered_comments = [];
    if (event.target.value === '') {
      this.filtered_comments = this.comments;
      return;
    }
    for (var index in this.comments) {
      var matched = false;
      for (var key in this.comments[index]) {
        var temp_string = this.comments[index][key].toString();
        if (temp_string.includes(event.target.value)){
          matched = true;
        }
      }

      if (matched === true) {
        this.filtered_comments.push(this.comments[index]);
      }
    }
  }

}
