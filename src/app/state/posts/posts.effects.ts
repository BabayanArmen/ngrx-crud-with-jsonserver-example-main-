import { Post } from './../../shared/models/post.model';
import { PostsService } from '../../shared/services/posts.service';
import { AppState } from './../app.state';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createEffects } from "@ngrx/effects/src/effects_module";
import { Store } from "@ngrx/store";
import { loadPosts, loadPostsSuccess, loadPostsFailure } from './posts.actions';
import { catchError, EMPTY, map, mergeMap, Observable, of, switchMap } from 'rxjs';

@Injectable()
export class PostsEffects {

    constructor(
      private actions$: Actions,
      private store: Store<AppState>,
      private postsService: PostsService) {}

  loadPosts$ = createEffect((): Observable<any> => this.actions$.pipe(
    ofType(loadPosts),
    mergeMap(() => this.postsService.getPosts()
      .pipe(
        // map(posts => ({ type: '[Posts] load post success', posts: posts })), // 1 syntax
        map((posts: Post[]) => (
          // loadPostsSuccess({posts}), // 2 syntax
          this.store.dispatch(loadPostsSuccess({posts})) // 3 syntax
        )),
        catchError(err => {
          console.log('error', err);
          this.store.dispatch(loadPostsFailure({error: 'error'}))
          return EMPTY;
        })
      )
      )
    )
  )

}
