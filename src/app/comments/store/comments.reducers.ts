import * as commentsActions from './comments.actions';
import { UserCommentState, initialState } from './comments.state';
import { createReducer, on, Action } from '@ngrx/store';

export const reducers = createReducer(
  initialState,
  on(commentsActions.getComments, (state, action) => ({
    ...state,
  })),
  on(commentsActions.getCommentsSuccess, (state, action) => ({
    ...state,
    comments: action.data,
  })),
  on(commentsActions.getCommentsFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);

export function CommentsReducer(
  state: UserCommentState | undefined,
  action: Action
): UserCommentState {
  return reducers(state, action);
}
