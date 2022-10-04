import { UserProfile } from '@loopback/security';

export type Credentials = {
  userName: string;
  password: string;
};

export interface MyUserProfile extends UserProfile {
  id: string;
  username: string;
}