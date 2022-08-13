import { User } from './user.model';
export class UserComment {
  id: number | null = null;
  content: string | null = null;
  createdAt: string | null = null;
  score: number | null = null;
  user: User | null = null;
  replies: UserComment[] | null = null;
}
