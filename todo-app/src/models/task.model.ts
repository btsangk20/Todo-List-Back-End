import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Project} from './project.model';
import {User} from './user.model';

@model()
export class Task extends Entity {
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
  name: string;

  @property({
    type: 'boolean',
  })
  isCreatedByAdmin?: boolean;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
    default: "Doing",
  })
  status?: string;

  @property({
    type: 'string',
    required: true,
  })
  createdBy: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isDeleted?: boolean;
  
  @belongsTo(() => Project, {name: 'ofProject'})
  projectId: string;

  @belongsTo(() => User, {name: 'assignedTo'})
  userId: string;

  @belongsTo(() => Task, {name: 'linkedToo'})
  linkedTo: string;

  constructor(data?: Partial<Task>) {
    super(data);
  }
}

export interface TaskRelations {
  // describe navigational properties here
}

export type TaskWithRelations = Task & TaskRelations;
