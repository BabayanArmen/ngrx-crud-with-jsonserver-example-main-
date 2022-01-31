import { addPost, loadPosts, loadPostsFailure, loadPostsSuccess, removePost } from './posts.actions';
import { createReducer, on } from "@ngrx/store";
import { Post } from 'src/app/shared/models/post.model';

export interface PostsState {
  posts: Post[];
  error: string | null;
  status: string
}

export const initialPostsState: PostsState = {
  posts: [],
  error: null,
  status: 'pending'
}

export const postsReducer = createReducer(
  initialPostsState,
  on(addPost, (state, { post }) => ({
    ...state,
    posts: [...state.posts, post]
  })),
  on(removePost, (state, { id }) => ({
    ...state,
    posts: state.posts.filter(post => post.id != id)
  })),
  on(loadPosts, (state) => ({
    ...state,
    status: 'loading'
  })),
  on(loadPostsSuccess, (state, { posts }) => ({
    ...state,
    status: 'success',
    posts: posts
  })),
  on(loadPostsFailure, (state, {error}) => ({
    ...state,
    status: 'error'
  }))
)
