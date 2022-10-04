import {Entity, model, property, hasMany} from '@loopback/repository';
import {Task} from './task.model';
import {UserProject} from './user-project.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  userName: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isAdmin?: boolean;

  @hasMany(() => Task)
  tasks: Task[];

  @hasMany(() => UserProject)
  userProjects: UserProject[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
