import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl = 'https://jsonplaceholder.typicode.com/'
  constructor(private _http: HttpClient) {}


  getCommentsByPostId(postId: number) {
    
    return this._http.get<Comment>(this.baseUrl + `comments?postId=${postId}`);
  }
}
