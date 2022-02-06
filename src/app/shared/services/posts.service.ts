import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('http://localhost:3000/posts')
  }

  addPost(post: Post) {
    console.log('service', post);
    return this.http.post('http://localhost:3000/posts', post)
  }

  updatePost(post: Post) {
    return this.http.put(`http://localhost:3000/posts/${post.id}`, post)
  }

  deletePost(id: number) {
    return this.http.delete(`http://localhost:3000/posts/${id}`)
  }
}
