import { Post } from './../../shared/models/post.model';
import { addPost } from './../../state/posts/posts.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectStatus } from 'src/app/state/posts/posts.selectors';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  status$ = this.store.select(selectStatus)

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addPost(title: string) {
    let post: Post = {
      title
    }
  this.store.dispatch(addPost({post}))
  }

}
