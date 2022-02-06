import { addPost, addPostSuccess, editPostSuccess, loadPosts, loadPostsSuccess, removePost, removePostSuccess, setStatus } from './posts.actions';
import { createReducer, on } from "@ngrx/store";
import { Post } from 'src/app/shared/models/post.model';

export interface PostsState {
  posts: Post[];
  status: string
}

export const initialPostsState: PostsState = {
  posts: [],
  status: 'pending'
}

export const postsReducer = createReducer(
  initialPostsState,
  on(loadPostsSuccess, (state, action) => {
    return {
      ...state,
      posts: action.posts
    }
  }),
  on(addPostSuccess, (state, action) => {
    return {
      ...state,
      posts: [...state.posts, action.post]
    }
  }),
  on(editPostSuccess, (state, action) => {
    let posts: Post[] = state.posts.concat();
    let post: Post | undefined = posts.find(el => el.id == action.post.id)
    if(post) {
      let index = posts.indexOf(post)
      posts[index] = action.post
    }
    //// using any
    // let posts: any = state.posts.concat()
    // let index = posts.indexOf(posts.find((post: any) => post.id === action.post.id))
    // posts[index] = action.post
    return {
      ...state,
      posts
    }
  }),
  on(removePostSuccess, (state, action) => ({
    ...state,
    posts: state.posts.filter(post => post.id != action.id)
  })),
  on(setStatus, (state, action) => ({
    ...state,
    status: action.status
  }))
)
