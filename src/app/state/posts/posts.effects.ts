import { editPost, editPostSuccess, loadPosts, removePost, removePostSuccess } from 'src/app/state/posts/posts.actions';
import { PostsService } from '../../shared/services/posts.service';
import { AppState } from './../app.state';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { addPost, addPostSuccess, loadPostsSuccess, setStatus } from './posts.actions';
import { catchError, EMPTY, map, mergeMap, Observable, of, switchMap } from 'rxjs';

@Injectable()
export class PostsEffects {

    constructor(
      private actions$: Actions,
      private store: Store<AppState>,
      private postsService: PostsService) {}


  // loadPosts
  loadPosts$ = createEffect((): Observable<any> => this.actions$.pipe(
    ofType(loadPosts),
    mergeMap(() => this.postsService.getPosts()
      .pipe(
        //// version 1
        // map(posts => ({ type: '[Posts] load post success', posts: posts })), // 1 syntax
        //// version 2
        // map(posts => (
        //   console.log('log'),
        //   { type: '[Posts] load post success', posts: posts }
        // // loadPostsSuccess({posts}), // 2 syntax
        // // this.store.dispatch(setStatus({status: 'load successed'})) // 3 syntax
        // )),
        //// version 3
        map((posts: any) => {
          // this.store.dispatch(setStatus({status: 'load successed'}))
          // return { type: '[Posts] load post success', posts: posts }
          this.store.dispatch(setStatus({status: 'load successed'}))
          return loadPostsSuccess({posts: posts})
          }
        ),
        // catchError(err => {
        //   this.store.dispatch(setStatus({status: 'load failed'}))
        //   return EMPTY;
        // })
        catchError((error) => of(this.store.dispatch(setStatus({status: 'load failed'}))))
        )
      )
    ),
    // {dispatch: false}
  )

  // addPost
  createPosts$ = createEffect((): Observable<any> => this.actions$.pipe(
    ofType(addPost),
    mergeMap((action) => this.postsService.addPost(action.post)
      .pipe(
        map((post: any) => {
          this.store.dispatch(setStatus({status: 'add post successed'}))
          return addPostSuccess({post})
          }
        ),
        catchError((error) => of(this.store.dispatch(setStatus({status: 'add post failed'}))))
        )
      )
    ),
  )

  // editPost
  updatePosts$ = createEffect((): Observable<any> => this.actions$.pipe(
    ofType(editPost),
    mergeMap((action) => this.postsService.updatePost(action.post)
      .pipe(
        map((post: any) => {
          this.store.dispatch(setStatus({status: 'update post successed'}))
          return editPostSuccess({post})
          }
        ),
        catchError((error) => of(this.store.dispatch(setStatus({status: 'add post failed'}))))
        )
      )
    ),
  )

  // removePost
  removePost$ = createEffect((): Observable<any> => this.actions$.pipe(
    ofType(removePost),
    mergeMap((action) => this.postsService.deletePost(action.id)
      .pipe(
        map(() => {
          this.store.dispatch(setStatus({status: 'remove post successed'}))
          return removePostSuccess({id: action.id})
          }
        ),
        catchError((error) => of(this.store.dispatch(setStatus({status: 'add post failed'}))))
        )
      )
    ),
  )

}
