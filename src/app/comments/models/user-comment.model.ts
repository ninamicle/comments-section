import { User } from './user.model';
export class UserComment {
  id: string | null = null;
  content: string | null = null;
  createdAt: string | null = null;
  score: number | null = null;
  user: User | null = null;
  // replyingTo: string | null = null;
  // replies: UserComment[] | null = null;
}
