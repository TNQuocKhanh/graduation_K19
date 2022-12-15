import {Entity, model, property} from '@loopback/repository';

@model({})
export class Address {
  @property({
    type: 'string',
  })
  name: string;

  @property({
    type: 'string',
  })
  phone: string;

  @property({
    type: 'string',
  })
  street: string;

  @property({
    type: 'string',
  })
  ward: string;
  
  @property({
    type: 'string',
  })
  district: string;

  @property({
    type: 'string',
  })
  province: string;
}

@model({settings: {strict: false}})
export class Account extends Entity {
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
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    hidden: true,
    required: true,
  })
  password: string;

  @property({
    type: 'array',
    itemType: Address
  })
  address?: Address[];

  @property({
    type: 'boolean',
  })
  isAdmin?: boolean;

  @property({
    type: 'boolean',
    default: false
  })
  verify?: boolean;

  @property({
    type: 'boolean',
    default: false
  })
  block?: boolean;

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

  constructor(data?: Partial<Account>) {
    super(data);
  }
}

export interface AccountRelations {
  // describe navigational properties here
}

export type AccountWithRelations = Account & AccountRelations;
