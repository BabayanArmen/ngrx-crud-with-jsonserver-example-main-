import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/shared/models/post.model';
import { AppState } from 'src/app/state/app.state';
import { editPost, loadPosts, removePost } from 'src/app/state/posts/posts.actions';
import { selectAllPosts } from 'src/app/state/posts/posts.selectors';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.scss']
})
export class ReadPostComponent implements OnInit {
  posts$ = this.store.select(selectAllPosts)

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.dispatch(loadPosts())
  }

  update(post: Post, title: string) {
    let updatedPost: Post = {
      id: post.id,
      title: title
    }
    this.store.dispatch(editPost({post: updatedPost}))
  }

  delete(id: number) {
    this.store.dispatch(removePost({id}))
  }

}
