import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../_models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = 'https://jsonplaceholder.typicode.com/'
  constructor(private _http: HttpClient) {

  }

  getposts() {
    return this._http.get<Post>(this.baseUrl + 'posts');
  }

  getpost(postid: number) {
    return this._http.get<Post>(this.baseUrl + `posts/${postid}`);
  }
}
