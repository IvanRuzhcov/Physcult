import { Subscription } from '../types/Subscription';
import { Posts } from './Post';
import User from './User';

export default interface UserAuthState {
  user: User | undefined;
  allUsers: User[]
  post: Posts[];
  allPosts:Posts[]
  subscription: Subscription[];
  subscribers: Subscription[];
  authChecked: boolean;
}
