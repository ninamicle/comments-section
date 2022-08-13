import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as commentsActions from './comments.actions';
import { CommentsService } from '../services/comments.service';

import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommentsEffects {
  constructor(private actions$: Actions, private srv: CommentsService) {}

  initData$ = this.actions$.pipe(
    ofType(commentsActions.initData),
    switchMap(() => [commentsActions.getComments()])
  );

  getComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(commentsActions.getComments),
      switchMap(() =>
        this.srv.getComments().pipe(
          map((data) => commentsActions.getCommentsSuccess({ data })),
          catchError((error) =>
            of(commentsActions.getCommentsFailure({ error: error }))
          )
        )
      )
    )
  );
}
