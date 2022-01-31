import { Post } from './../../shared/models/post.model';
import { addPost } from './../../state/posts/posts.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addPost(title: string) {
    let post: Post = {
      id: 1,
      title
    }
  this.store.dispatch(addPost({post}))
  }

}
