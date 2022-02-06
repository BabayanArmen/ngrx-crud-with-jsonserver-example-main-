import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/shared/models/post.model";

export const loadPosts = createAction('[Posts] load post');
export const loadPostsSuccess = createAction('[Posts] load post success', props< {posts: Post[] }>());

export const addPost = createAction('[Posts] add post', props<{ post: Post }>());
export const addPostSuccess = createAction('[Posts] add post success', props<{ post: Post }>());

export const editPost = createAction('[Posts] edit post', props<{ post: Post }>());
export const editPostSuccess = createAction('[Posts] edit post success', props<{ post: Post }>());

export const removePost = createAction('[Posts] remove post', props<{ id: number }>());
export const removePostSuccess = createAction('[Posts] remove post success',props<{ id: number }>());

export const setStatus = createAction('[Posts] set status', props<{status: string}>());
