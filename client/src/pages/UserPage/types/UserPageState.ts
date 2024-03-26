import { Comment } from './Comment';
import { Like } from './Like';
import { Subscribers, Subscription } from './Subscribers';

export interface UserPageState {
  subscription: Subscription[];
  subscribers: Subscribers[];
  like: Like[];
  comment: Comment[]
}
