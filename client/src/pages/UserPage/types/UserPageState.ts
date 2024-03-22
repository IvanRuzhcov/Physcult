import { Subscribers, Subscription } from './Subscribers';

export interface UserPageState {
  subscription: Subscription[];
  subscribers: Subscribers[];
}
