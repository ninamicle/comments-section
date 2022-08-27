import { UserComment } from '../models';
import { User } from '../models/user.model';

export interface UserCommentState {
  comments: UserComment[] | null;
  commentsLoading: boolean;
  users: User[] | null;
  usersLoading: boolean;
  addComment: UserComment | null;
  addCommentLoading: boolean;
}
export const initialState: UserCommentState = {
  comments: null,
  commentsLoading: false,
  users: null,
  usersLoading: false,
  addComment: null,
  addCommentLoading: false,
};
