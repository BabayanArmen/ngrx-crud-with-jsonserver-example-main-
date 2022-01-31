import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { loadPosts } from 'src/app/state/posts/posts.actions';
import { selectAllPosts } from 'src/app/state/posts/posts.selectors';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.scss']
})
export class ReadPostComponent implements OnInit {
  posts$ = this.store.select(selectAllPosts)

  constructor(
    private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.dispatch(loadPosts())
  }

}
