import {Entity, model, property} from '@loopback/repository';

@model()
export class UserProject extends Entity {
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
  projectId: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;


  constructor(data?: Partial<UserProject>) {
    super(data);
  }
}

export interface UserProjectRelations {
  // describe navigational properties here
}

export type UserProjectWithRelations = UserProject & UserProjectRelations;
