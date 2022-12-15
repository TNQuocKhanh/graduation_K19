import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Organizer extends Entity {
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
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: string;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  updatedAt?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Organizer>) {
    super(data);
  }
}

export interface OrganizerRelations {
  // describe navigational properties here
}

export type OrganizerWithRelations = Organizer & OrganizerRelations;
