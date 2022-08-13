import * as act from './comments.actions';
import { CommentsEffects } from './comments.effects';
import { reducers } from './comments.reducers';
import * as sel from './comments.selectors';

export { COMMENTS_FEATURE_NAME } from './comments.selectors';
export const COMMENTS_REDUCERS = reducers;
export const COMMENTS_EFFECTS = [CommentsEffects];
export const commentsActions = act;
export const commentsSelectors = sel;
