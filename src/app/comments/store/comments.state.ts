import { UserComment } from '../models';

export interface UserCommentState {
  comments: UserComment[] | null;
  commentsLoading: boolean;
  addComment: UserComment | null;
  addCommentLoading: boolean;
}
export const initialState: UserCommentState = {
  comments: null,
  commentsLoading: false,
  addComment: null,
  addCommentLoading: false,
};
