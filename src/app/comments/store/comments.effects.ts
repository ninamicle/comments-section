import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { catchError, switchMap, take, tap } from 'rxjs/operators';
import { of, map } from 'rxjs';
import * as commentsActions from './comments.actions';
import { CommentsService } from '../services/comments.service';

@Injectable({
  providedIn: 'root',
})
export class CommentsEffects {
  constructor(private actions$: Actions, private srv: CommentsService) {}
  initData$ = this.actions$.pipe(
    ofType(commentsActions.initData),
    switchMap(() => [commentsActions.getComments(), commentsActions.getUsers()])
  );
  getComments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(commentsActions.getComments),
      switchMap(() => {
        console.log('cc');
        return this.srv.getComments().pipe(
          map((data) => commentsActions.getCommentsSuccess({ data })),
          catchError((error) =>
            of(commentsActions.getCommentsFailure({ error }))
          )
        );
      })
    );
  });
  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(commentsActions.getUsers),
      switchMap(() =>
        this.srv.getUsers().pipe(
          map((data) => commentsActions.getUsersSuccess({ users: data })),
          catchError((error) => of(commentsActions.getUsersFailure({ error })))
        )
      )
    );
  });
}
