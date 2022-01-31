import { createSelector } from '@ngrx/store';
import { AppState } from './../app.state';
import { PostsState } from './posts.reduceres';

export const selectPostsState = (state: AppState) => state.posts;
export const selectAllPosts = createSelector(
  selectPostsState,
  (state: PostsState) => state.posts
)
