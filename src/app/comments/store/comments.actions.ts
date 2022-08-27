import { createAction, props } from '@ngrx/store';
import { UserComment } from '../models';
import { User } from '../models/user.model';

export const initData = createAction('[Cooments] Init Data');

export const getComments = createAction('[Cooments] Get Comments');

export const getCommentsSuccess = createAction(
  '[Comments] Get Comments Success',
  props<{ data: UserComment[] }>()
);

export const getCommentsFailure = createAction(
  '[Comments] Get Comments Failure',
  props<{ error: Error }>()
);

export const addComment = createAction(
  '[Comments] Add Comment',
  props<{ comment: UserComment }>()
);

export const addCommentSuccess = createAction('[Comments] Add Comment Success');

export const addCommentFailure = createAction(
  '[Comments] Add Comment Failure',
  props<{ error: Error }>()
);

export const getUsers = createAction('[Comments] Get users');
export const getUsersSuccess = createAction(
  '[Comments] Get users Success',
  props<{ users: User[] }>()
);
export const getUsersFailure = createAction(
  '[Comments] Get users Failure',
  props<{ error: Error }>()
);
