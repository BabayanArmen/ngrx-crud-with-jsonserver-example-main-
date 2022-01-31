import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/shared/models/post.model";

export const addPost = createAction('[Posts] add post', props<{ post: Post }>());
export const removePost = createAction('[Posts] remove post', props<{ id: any }>());
export const editPost = createAction('[Posts] edit post', props<{ post: Post }>());
export const loadPosts = createAction('[Posts] load post');
export const loadPostsSuccess = createAction('[Posts] load post success', props< {posts: Post[] }>());
export const loadPostsFailure = createAction('[Posts] load post failure', props<{error: string}>());
