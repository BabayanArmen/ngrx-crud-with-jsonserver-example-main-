import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { loadPosts } from './state/posts/posts.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab2';

  constructor(private store: Store<AppState>) {
    // this.store.dispatch({ type: '[Posts] load post'})
    this.store.dispatch(loadPosts())
  }
}
