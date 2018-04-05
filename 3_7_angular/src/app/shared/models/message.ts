import { User } from './user';

export interface Message {
  id: string;
  body: string;
  date: string;
  user: User;
}
