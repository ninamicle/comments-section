import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserCommentState, initialState } from './comments.state';

export const COMMENTS_FEATURE_NAME = 'comments';
export const commentsSelector = createFeatureSelector<UserCommentState>(
  COMMENTS_FEATURE_NAME
);

export const selectComments = createSelector(
  commentsSelector,
  (state: UserCommentState) => state
);
